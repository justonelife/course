import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DonutGraphComponent } from './donut-graph.component';

describe('DonutGraphComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DonutGraphComponent],
            imports: [HttpClientTestingModule]
        })
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(DonutGraphComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    // it('getIn should be called', () => {
    //     let fixture = TestBed.createComponent(DonutGraphComponent);
    //     let component = fixture.componentInstance;
    //     spyOn(component, 'getIn');

    //     fixture.detectChanges();
    //     let canvas = component.donutCanvas;
    //     canvas.nativeElement.click();
    //     expect(component.getIn).toHaveBeenCalled();
    // });
});
