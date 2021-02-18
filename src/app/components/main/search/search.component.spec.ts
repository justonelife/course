import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [HttpClientTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(SearchComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
