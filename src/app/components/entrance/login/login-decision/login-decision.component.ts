import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-decision',
  templateUrl: './login-decision.component.html',
  styleUrls: ['./login-decision.component.scss']
})
export class LoginDecisionComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
