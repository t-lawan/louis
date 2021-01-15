export class PageModel {
    id;
    title;
    slug;
    description;
    sections;
    showTitle;
    constructor(id,title, showTitle, slug, description, sections) {
        this.id = id;
        this.title = title;
        this.showTitle = showTitle;
        this.slug = slug;
        this.description = description;
        this.sections = sections;
    }
}