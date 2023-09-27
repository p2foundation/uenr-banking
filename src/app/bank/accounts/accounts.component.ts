import {Component, OnInit} from '@angular/core';
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {
    // this.accountForm = this.formBuilder.group({
    //   description: [null, Validators.required],
    //   accountType: [null, Validators.required],
    // });
    // console.log('returnUrl: ', this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/');

  }

}
