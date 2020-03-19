const images = require('../../assets/img/*.png');
const sounds = require('../../assets/audio/*.mp3');

interface Resource {
    name: string;
    src: string;
}

const IMAGES: Resource[] = [
    {name: 'gold', src: 'gold.png'},
    {name: 'enemy', src: 'enemy.png'},
    {name: 'player', src: 'player.png'},
];

const SOUNDS: Resource[] = [
    {name: 'audio', src: 'audio.mp3'},
];

export class ResourceManager {
    private loadedImages: Map<string, HTMLImageElement> = new Map();
    private loadedSounds: Map<string, HTMLAudioElement> = new Map(); 

    public async loadAssets() {
        await this.loadImages();
        await this.loadSounds();
    }

    public getImage(imgName: string): HTMLImageElement {
        const img = this.loadedImages.get(imgName);
        if (!img) {
            throw new Error(`Image not found '${imgName}'`)
        }
        return img;
    }

    public getSound(soundName: string) {
        return this.loadedImages.get(soundName);
    }


    private async loadSounds() {
        await Promise.all(
            SOUNDS.map(sound => this.loadSound(sound)),
        )
    }

    private async loadImages() {
        await Promise.all(
            IMAGES.map(image => this.loadImage(image)),
        )
    }

    private async loadImage(imgResource: Resource) {
        return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = images[imgResource.name];
            img.onload = () => {
                this.loadedImages.set(imgResource.name, img);
                resolve(img);
            }
        });
    }

    private async loadSound(soundResource: Resource) {
        return new Promise<HTMLAudioElement>((resolve) => {
            const audioSrc = sounds[soundResource.name];
            const audio = new Audio(audioSrc);
            audio.addEventListener('canplay', () => {
                this.loadedSounds.set(soundResource.name, audio);
                resolve(audio);
            }, false);
        });
    }
}

export const resourceManager = new ResourceManager();
