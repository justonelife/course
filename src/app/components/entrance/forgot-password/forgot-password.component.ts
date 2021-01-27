import { Component, OnInit } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  faKey = faKey;

  constructor() { }

  ngOnInit(): void {
  }

}
