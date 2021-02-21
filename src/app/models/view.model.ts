export class View {
    _id?: string;
    postId: string;
    postTitle: string;
    categoryId: string;
    timestamp?: string;
    constructor(View) {
        this._id = View._id;
        this.postId = View.postId;
        this.categoryId = View.categoryId;
        this.postTitle = View.postTitle;
        this.timestamp = View._kmd.ect;
    }
}