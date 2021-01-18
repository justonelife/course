export class Category {
    _id:string;
    name:string;
    parentId:string;
    child?:Category[]
}