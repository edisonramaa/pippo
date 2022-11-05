import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ResponseModel} from "../core/lib/model/response.model";
import {Observable} from "rxjs";
import {CustomValidator, EMAIL_REGEX, PERSON_NAME} from "../core/lib/services/custom-validator.service";
import {SignUpModel} from "../models/sign-up.model";
import {SignUpService} from "../app-services/sign-up.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpModel: SignUpModel;
  signUpFormGroup: FormGroup;
  disableSignUpBtn: boolean;
  showErrMsg: string;
  showSuccessMsg: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _signUpService: SignUpService,
    private _customValidator: CustomValidator,
    private _router: Router
  ){
    this.signUpModel = new SignUpModel();
    this.disableSignUpBtn = false;
  }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.signUpFormGroup = new FormGroup({
      email: new FormControl(this.signUpModel.email, {
        validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
        asyncValidators: [this.checkInUseEmail.bind(this)],
        updateOn: 'blur'
      }),
      name: new FormControl(this.signUpModel.name, {
        validators: [Validators.required, Validators.pattern(PERSON_NAME)],
        updateOn: 'blur'
      }),
      password: new FormControl(this.signUpModel.password, {
        validators: [Validators.required, Validators.minLength(6)],
        updateOn: 'blur'
      }),
    });

  }

  checkInUseEmail(control) {
    let controlValue = control.value;

    return new Observable(observer => {
      this._signUpService.findByEmail(controlValue).then((res: ResponseModel) => {
        if (res.responseStatus) {
          let observerResult = res.result ? {'alreadyInUse': true} : null;
          observer.next(observerResult);
          observer.complete();
        }
      });
    });
  }

  onSignUp() {
    console.log("hello");
    this.showErrMsg = "";
    this.showSuccessMsg = "";
    if (this.signUpFormGroup.valid) {
      this.disableSignUpBtn = true;
      this.signUpModel = this.signUpFormGroup.value;
      this._signUpService.signUp(this.signUpModel).then((res: ResponseModel) => {
        if (res.responseStatus) {
          this.signUpFormGroup.reset();
          this.disableSignUpBtn = false;
          this.showSuccessMsg = res.message;
          this.showErrMsg = "";
          this.disableSignUpBtn = false;
        } else {
          this.showErrMsg = res.message;
          this.disableSignUpBtn = false;
        }

      });
    }
  }

}
