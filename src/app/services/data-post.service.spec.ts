import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { DataPostService } from './data-post.service';

describe('DataPostSevice', () => {
  let dataPost: DataPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataPostService],
    });

    dataPost = TestBed.get(DataPostService);
  });

  it('getCountPostByMultiCategoryId should return right data', () => {
    const sourceData = [
      {
        _id: '1',
        title: 'title 1',
        content: 'content 1',
        categoryId: '1',
      },
      {
        _id: '2',
        title: 'title 2',
        content: 'content 2',
        categoryId: '1',
      },
      {
        _id: '3',
        title: 'title 3',
        content: 'content 3',
        categoryId: '2',
      },
      {
        _id: '4',
        title: 'title 4',
        content: 'content 4',
        categoryId: '3',
      },
    ];
    const queryIds = ['1', '2'];

    const expectData = 3;

    spyOn(dataPost, 'getCountPostByMultiCategoryId').and.callFake(
      (queryIds): Observable<number> => {
        let count = 0;
        for (let i = 0; i < queryIds.length; i++) {
          for (let j = 0; j < sourceData.length; j++) {
            if (queryIds[i] === sourceData[j].categoryId) count++;
          }
        }

        return of(count);
      }
    );

    dataPost
      .getCountPostByMultiCategoryId(queryIds)
      .subscribe((res) => expect(res).toEqual(expectData));
  });
});
