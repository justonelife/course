import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ReadComponent } from './read.component';

describe('ReadComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReadComponent],
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({name: 'nhap-mon-angular'})
                    }
                }
            ]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(ReadComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
