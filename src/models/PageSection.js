export class PageSection {
    id;
    title;
    image;
    images;
    text;
    type;
    constructor(id,title, type, image, images, text) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.text = text;
        this.type = type;
        this.images = images;
    }
}