import { Post } from './../../../../models/post.model';
import { DataService } from './../../../../services/data.service';
import { Category } from './../../../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss'],
})
export class PostsEditComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faSearch = faSearch;

  public categories: Category[] = [];
  public posts: Post[] = [];
  public defaultPost: Post = {
    _id: null,
    title: null,
    content: null,
    categoryId: null,
    prevId: null,
    thumbnail: null,
    url: null,
  };
  public post: Post;
  public searchText: string;
  public select;
  public isLoaded: boolean = false;
  public isDeleted: boolean = false;
  public count: number = 0;
  public itemPerPage: number = 25;
  public totalPage: number;
  public errrorMessage;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });

    this.post = JSON.parse(JSON.stringify(this.defaultPost));

    forkJoin([
      this._dataService.getAllPosts(),
      this._dataService.getIntroPosts(),
    ]).subscribe();

    this._dataService.getCountPosts().subscribe((res) => {
      this.calTotalPage(res);
    });

    this._dataService.pagingPosts(this.itemPerPage, 0).subscribe(
      (res) => {
        this.posts = res;
        this.isLoaded = true;
      },
      (err) => (this.errrorMessage = err)
    );
  }

  calTotalPage = (val: number) => {
    let totalPosts: number = val;
    this.totalPage = Math.ceil(totalPosts / this.itemPerPage);
  };

  pageChanges = (val: number) => {
    this.posts = undefined;
    this._dataService
      .pagingPosts(this.itemPerPage, (val - 1) * this.itemPerPage)
      .subscribe((res) => {
        this.posts = res;
      });
  };

  delModal = (item) => {
    this.post = item;
  };

  onDelPost = (post: Post) => {
    this.isDeleted = true;
    this._dataService.deletePosts(post).subscribe((_) => {
      this.posts = this.posts.filter((item) => item._id !== post._id);
    });
  };

  editModal = (item) => {
    this.post = item;
  };

  onUpdatePost = (post) => {
    // console.log(val);
    this._dataService.updatePosts(post).subscribe((data) => data);
  };
}
