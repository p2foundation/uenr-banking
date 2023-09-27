import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "../../../repository/Payments/payment.service";

@Component({
  selector: 'app-school-fees',
  templateUrl: './school-fees.component.html',
  styleUrls: ['./school-fees.component.scss']
})
export class SchoolFeesComponent implements OnInit {

  payForm: FormGroup;
  userId: any = '';

  isLoadingResults = false;
  isLoading = true;
  public errorMsg = '';
  public successMsg = '';


  paymentType = '';
  studentId = '';
  description = '';
  accountType = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {
  }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      paymentType: [null, Validators.required],
      studentId: [null, Validators.required],
      description: [null, Validators.required],
      program: [null, Validators.required],
      amount: [null, Validators.required],
    });

  }


  onPaymentSubmit(form: NgForm){
    console.log('make payment form inputs:>>>>', form);
    this.paymentService.makePayments(form)
      .subscribe(res => {
        console.log(`make payment response ==> ${JSON.stringify(res)}`);
        console.error('register error msg ==>'+ res);
        this.isLoading = false;
        this.router.navigate(['banking/accounts/account-info']);

      }, (err) => {
        console.log(err);
        this.isLoading = false;
        // alert(err.error);
      });
  }

}
