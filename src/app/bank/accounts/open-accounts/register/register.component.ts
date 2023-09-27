import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../repository/Auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup;
  isLoadingResults = false;

  username = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  password = '';
  retypedPassword = '';

  isLoading = true;

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
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      retypedPassword: [null, Validators.required],
      password: [null, Validators.required]
    });
    // console.log('returnUrl: ', this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/');

  }

  onRegisterSubmit(form: NgForm){
    console.log('RegisterPageComponent:  register user form >>>>', form);
    this.authService.register(form)
      .subscribe(res => {
        console.log(`register new user response ==> ${JSON.stringify(res)}`);
        console.error('register error msg ==>'+ res.status);
        this.isLoading = false;
        this.router.navigate(['banking/accounts/account-info']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        // alert(err.error);
      });
  }


  gotoLoginPage() {
    this.router.navigateByUrl('/banking/accounts/open-account/login-accounts');
  }
}
