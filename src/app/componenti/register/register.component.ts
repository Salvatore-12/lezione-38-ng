import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
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
    const email = form.value.email
    const password = form.value.password
    this.authService.signUp(email,password).subscribe(data =>{
      console.log(data) 
    }, 
    error => {
      console.error('Error:', error);
    })
    form.reset
  }
}
