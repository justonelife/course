import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of} from 'rxjs';

import { DataService } from './data.service';
import { Category } from '../models/category.model';
import { User } from '../models/user.model';

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DataService],
        });
        service = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should #getUsers return expected value', () => {
        const fakeUsersData: User[] = [
            {
                _id: '1',
                username: 'a',
                roleId: 'admin',
                email: 'name@abc.xyz'
            },
            {
                _id: '2',
                username: 'b',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
            {
                _id: '3',
                username: 'c',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
        ];

        const expectedUsersData: User[] = [
            {
                _id: '1',
                username: 'a',
                roleId: 'admin',
                email: 'name@abc.xyz'
            },
            {
                _id: '2',
                username: 'b',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
            {
                _id: '3',
                username: 'c',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
        ];

        spyOn(service, 'getUsers').and.returnValue(of(fakeUsersData));
        const res = service.getUsers();
        res.subscribe((value) => {
            expect(value).toEqual(expectedUsersData);
        });
    });

    it('should #getCountUsers return expected value', () => {
        const fakeUsersData: User[] = [
            {
                _id: '1',
                username: 'a',
                roleId: 'admin',
                email: 'name@abc.xyz'
            },
            {
                _id: '2',
                username: 'b',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
            {
                _id: '3',
                username: 'c',
                roleId: 'user',
                email: 'name@abc.xyz'
            },
        ];

        const expectedData = 3;

        spyOn(service, 'getCountUsers').and.returnValue(of(fakeUsersData.length));
        const res = service.getCountUsers();
        res.subscribe((value) => {
            expect(value).toEqual(expectedData);
        });
    });

    it('should #getCategories return expected value', () => {
        const fakeCateData: Category[] = [
            { _id: '1', name: 'a', parentId: null, url: 'a', thumbnail: 'img-src' },
            { _id: '2', name: 'a a', parentId: '1', url: 'a-a', thumbnail: 'img-src' },
            { _id: '3', name: 'a a a', parentId: '2', url: 'a-a-a', thumbnail: 'img-src' },
            { _id: '4', name: 'a a a a', parentId: '2', url: 'a-a-a-a', thumbnail: 'img-src' },
            { _id: '5', name: 'b', parentId: '1', url: 'b', thumbnail: 'img-src' },
            { _id: '6', name: 'b b', parentId: '5', url: 'b-b', thumbnail: 'img-src' },
        ];

        const expectedData: Category[] = [
            { _id: '1', name: 'a', parentId: null, url: 'a', thumbnail: 'img-src' },
            { _id: '2', name: 'a a', parentId: '1', url: 'a-a', thumbnail: 'img-src' },
            { _id: '3', name: 'a a a', parentId: '2', url: 'a-a-a', thumbnail: 'img-src' },
            { _id: '4', name: 'a a a a', parentId: '2', url: 'a-a-a-a', thumbnail: 'img-src' },
            { _id: '5', name: 'b', parentId: '1', url: 'b', thumbnail: 'img-src' },
            { _id: '6', name: 'b b', parentId: '5', url: 'b-b', thumbnail: 'img-src' },
        ];

        spyOn(service, 'getCategories').and.returnValue(of(fakeCateData));
        const res = service.getCategories();
        res.subscribe((value) => {
            expect(value).toEqual(expectedData);
        });
    });

    // it('should #pagingUser work right', () => {
    //   const fakeUsersData = [
    //     {
    //       _id: '1',
    //       username: 'a',
    //       roleId: 'admin',
    //     },
    //     {
    //       _id: '2',
    //       username: 'b',
    //       roleId: 'user',
    //     },
    //     {
    //       _id: '3',
    //       username: 'c',
    //       roleId: 'user',
    //     },
    //     {
    //       _id: '4',
    //       username: 'd',
    //       roleId: 'user',
    //     },
    //     {
    //       _id: '5',
    //       username: 'e',
    //       roleId: 'user',
    //     },
    //   ];

    //   const expectedData = [
    //     {
    //       _id: '1',
    //       username: 'a',
    //       roleId: 'admin',
    //     },
    //     {
    //       _id: '2',
    //       username: 'b',
    //       roleId: 'user',
    //     },
    //   ];

    //   const limit: number = 2;
    //   const skip: number = 0;

    //   spyOn(service, 'pagingUsers').and.callFake(
    //     (limit, skip): Observable<User[]> => {
    //       let res = service.pagingUsers(2, 0);

    //       return of(fakeUsersData);
    //     }
    //   );
    //   let res = service.pagingUsers(2, 0);
    //   res.subscribe((val) => {
    //     expect(val).toEqual(expectedData);
    //   });
    // });
});
