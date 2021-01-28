export class Post {
    _id: string;
    categoryId: string;
    content: string;
    title: string;
    url: string;
    thumbnail: string;
    prevId: string;
    constructor(p:Post) {
        this._id = p._id;
        this.categoryId = p.categoryId;
        this.content = p.content;
        this.title = p.title;
        this.url = p.url;
        this.thumbnail = p.thumbnail;
        this.prevId = p.prevId;
    }
}
