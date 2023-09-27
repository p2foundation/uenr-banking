import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolPayment} from "../../../repository/Payments/school.payment";

@Component({
  selector: 'app-school-fees',
  templateUrl: './school-fees.component.html',
  styleUrls: ['./school-fees.component.scss']
})
export class SchoolFeesComponent implements OnInit{

  paymentForm: FormGroup;
  userId: any = '';
  isLoadingResults = false;
  public loadingMsg = '';
  public errorMsg = '';
  public successMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private schoolPayment: SchoolPayment
  ) {
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      paymentType: [null, Validators.required],
      studentId: [null, Validators.required],
      description: [null, Validators.required],
      accountType: [null, Validators.required],
    });

  }


  public onPaymentSubmit (form: NgForm) {
    console.log('payment ==> ',+ form)
  }
}
