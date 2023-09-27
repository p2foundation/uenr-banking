import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../repository/Auth/auth.service";

@Component({
  selector: 'app-open-accounts',
  templateUrl: './open-accounts.component.html',
  styleUrls: ['./open-accounts.component.scss']
})
export class OpenAccountsComponent implements OnInit {
  accountForm: FormGroup;
  userId: any = '';
  isLoadingResults = false;
  public loadingMsg = '';
  public errorMsg = '';
  public successMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      description: [null, Validators.required],
      accountType: [null, Validators.required],
    });

  }

  onAccountFormSubmit(form: NgForm) {
    console.log(' open account controller >>>>', form);
  }

}
