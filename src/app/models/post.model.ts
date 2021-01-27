export class Post {
  _id: string;
  categoryId: string;
  content: string;
  title: string;
  url: string;
}

export interface PostsData {
  _id: string;
  title: string;
  content: string;
  categoryId: string;
  prevId: string;
  nextId: string;
  thumbnail: string;
  url: string
}
