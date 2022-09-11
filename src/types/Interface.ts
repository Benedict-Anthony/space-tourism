export interface Object {
    name: string,
    images: images,
    description: string,
    distance: string,
    travel:string,
    role: string,
    bio:string
}

interface images {
    png: string,
    webp: string,
    portrait: string,
    landscape:string
}