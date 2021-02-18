import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostsDecisionComponent } from './posts-decision.component';

describe('PostsDecisionComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsDecisionComponent],
            imports: [RouterTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(PostsDecisionComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
