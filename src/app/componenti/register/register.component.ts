import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../../shared.module';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const email = form.value
    const password = form.value
    this.authService.signUp(email,password).subscribe(data =>{
      console.log(data) 
    })
    form.reset
  }
}
