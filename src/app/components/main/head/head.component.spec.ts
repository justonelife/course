import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeadComponent } from './head.component';

describe('HeadComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeadComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ]
        });
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(HeadComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    // NGMODEL this.query

    // it('onSeachClick should be called', () => {
    //     let fixture = TestBed.createComponent(HeadComponent);
    //     let component = fixture.componentInstance;
    //     spyOn(component, 'onSearchClick');

    //     fixture.detectChanges();

    //     let compiled = fixture.nativeElement;
    //     let searchBtn = compiled.querySelector("button.search-btn");

    //     searchBtn.click();

    //     expect(component.onSearchClick).toHaveBeenCalled();
    // });
});
