import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: ['',[Validators.required,this.emailRegex]],
      password: ['',[Validators.required,this.passwordRegex]]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    const registerData = JSON.stringify(this.signupForm.value);
    localStorage.setItem('registeredUser', registerData);
    alert("Registration successful. Kindly login")
    this.router.navigate(["../login"])
  }


  passwordRegex(c: FormControl):any{
    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const valid = regex.test(c.value);
    return valid ? null : { invalidPassword: true };
  };

  emailRegex(c: FormControl):any{
    const regexe = new RegExp('^[a-z]{2,}@[a-z]{2,}.[a-z]{2,}$');
    const valid = regexe.test(c.value);
    return valid ? null : { invalidEmail: true };
  };


}
