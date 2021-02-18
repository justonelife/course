import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostsEditComponent } from './posts-edit.component';

describe('PostsEditComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsEditComponent],
            imports: [HttpClientTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(PostsEditComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
