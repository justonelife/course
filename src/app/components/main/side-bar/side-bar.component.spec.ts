import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideBarComponent],
            imports: [HttpClientTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(SideBarComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
