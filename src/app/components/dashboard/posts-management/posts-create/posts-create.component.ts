import { Post } from './../../../../models/post.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';
import { NameToUrlPipe } from '../../../../pipes/name-to-url.pipe';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss'],
})
export class PostsCreateComponent implements OnInit, OnChanges {
  public categories: Category[] = [];
  public posts: Post[] = [];
  public post: Post;
  public defaultPosts: Post = {
    _id: null,
    title: null,
    content: null,
    categoryId: null,
    prevId: null,
    thumbnail: null,
    url: null,
  };
  public isLoaded: boolean = false;
  public isPosted: boolean = false;
  public isIntro: boolean = false;
  public content: string;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.post = JSON.parse(JSON.stringify(this.defaultPosts));

    this._dataService.getCategories().subscribe((data: Category[]) => {
      this.isLoaded = true;
      this.categories = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onReset = () => {
    this.post.content = '';
  };

  onPost = () => {
    if (this.isIntro === true) {
      this.isPosted = true;
      this.addUrl();
      this._dataService.createPostIntro(this.post).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.isPosted = true;
      this.addUrl();
      this._dataService.createPosts(this.post).subscribe((res) => {
        console.log(res);
      });
    }
  };

  addUrl() {
    const nameToUrl = new NameToUrlPipe();
    this.post.url = nameToUrl.transform(this.post.title);
  }

  onToggleIntro = (event) => {
    if (event.target.checked) {
      this.isIntro = true;
    } else this.isIntro = false;
  };
}
