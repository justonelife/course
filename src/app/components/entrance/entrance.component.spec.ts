import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { EntranceComponent } from './entrance.component';

describe('EntranceComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EntranceComponent],
            imports: [RouterTestingModule],
        });
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(EntranceComponent);
        let comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });

    it('login switch button work right', () => {
        let fixture = TestBed.createComponent(EntranceComponent);
        let comp = fixture.componentInstance;
        spyOn(comp, 'onSwitch');

        fixture.detectChanges();
        let compiled = fixture.nativeElement;

        let btn = compiled.querySelector("input[value='login']");

        btn.click();
        expect(comp.onSwitch).toHaveBeenCalled();
    });

    it('register switch button work right', () => {
        let fixture = TestBed.createComponent(EntranceComponent);
        let comp = fixture.componentInstance;
        spyOn(comp, 'onSwitch');

        fixture.detectChanges();
        let compiled = fixture.nativeElement;

        let btn = compiled.querySelector("input[value='signup']");

        btn.click();
        expect(comp.onSwitch).toHaveBeenCalled();
    });
});
