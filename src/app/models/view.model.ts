export class View {
    _id?: string;
    postId: string;
    categoryId: string;
    timestamp?: string;
    constructor(View) {
        this._id = View._id;
        this.postId = View.postId;
        this.categoryId = View.categoryId;
        this.timestamp = View._kmd.ect;
    }
}