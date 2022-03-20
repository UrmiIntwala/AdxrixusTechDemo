import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  get f() { return this.signinForm.controls; }

  onSubmit() {
    let user:any = localStorage.getItem('registeredUser');
    if(user){
      user = JSON.parse(user);
      if(this.signinForm.value.email === user.email && this.signinForm.value.password === user.password){
        this.router.navigate(['../dashboard']);
      }
      else{
        alert("Invalid email or password")
      }
    }
  }

}
