import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../repository/Auth/auth.service";
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  userName = '';
  email = '';
  password = '';
  isLoadingResults = false;
  public loadingMsg = '';
  public errorMsg = '';
  public successMsg: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    // console.log('returnUrl: ', this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/');

  }

  onFormSubmit(form: NgForm) {
    console.log('controller login form >>>>', form);
    this.authService.login(form)
      .subscribe(res => {
        this.isLoadingResults = true;
        this.loadingMsg = 'dashboard loading ...';
        this.successMsg = JSON.stringify(res);
        console.log('login response >>>', this.successMsg);
        // alert(this.successMsg);
        if (res.token) {
          this.isLoadingResults = false;
          console.log(`res.token: ${res.token}`);
          console.log(`storing res.token ==>`);
          localStorage.setItem('token', res.token);

          this.router.navigate(['banking/accounts/account-info']);

        } else {
          console.log('login response >>>', res);
          alert(`status: 401, statusText: 'Unauthorized'`);
        }
      }, (err) => {
        console.error(`LoginPageComponent: Error login => ${JSON.stringify(err)}`);
        this.isLoadingResults = false;
        this.errorMsg = err.message;
        alert(`Login error: ${JSON.stringify(err)}`);
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  gotoRegisterPage() {
    this.router.navigateByUrl('/banking/accounts/open-account/register-accounts');
  }


}
