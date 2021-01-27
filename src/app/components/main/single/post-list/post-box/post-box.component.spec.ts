import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PostBoxComponent } from './post-box.component';

describe('PostBoxComponent', () => {
    let component: PostBoxComponent;
    let fixture: ComponentFixture<PostBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [PostBoxComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
