import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [HttpClientTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(NavBarComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
