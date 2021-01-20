import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostBoxComponent } from './post-box.component';

describe('PostBoxComponent', () => {
    let component: PostBoxComponent;
    let fixture: ComponentFixture<PostBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostBoxComponent],
            imports: [
                RouterTestingModule
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
