export class Category {
  _id: string;
  name: string;
  parentId: string;
  url: string;
  thumbnail: string;
  child?: Category[];
  constructor(Cate: Category) {
    this._id = Cate._id;
    this.name = Cate.name;
    this.parentId = Cate.parentId;
    this.url = Cate.url;
    this.thumbnail = Cate.thumbnail;
  }
}
