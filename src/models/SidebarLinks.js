export class SidebarLinks {
    id;
    title;
    pages;
    isLink;
    linkedPage;
    order;

    constructor(id,title, order,pages, isLink, linkedPage) {
        this.id = id;
        this.title = title;
        this.pages = pages;
        this.isLink = isLink;
        this.linkedPage = linkedPage;
        this.order = order;
    }
}