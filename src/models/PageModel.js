export class PageModel {
    id;
    title;
    slug;
    description;
    sections;

    constructor(id,title, slug, description, sections) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.sections = sections;
    }
}