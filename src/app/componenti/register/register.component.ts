import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService: AuthService,private router: Router){}

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    console.log('Registering user with email:', email);

    this.authService.signUp(email,password).subscribe(data =>{
    console.log('Registration successful:', data)  
    this.router.navigate(['/login'])
    }, 
    error => {
      console.error('Error during registration:', error);
    })
    form.reset()
  }
}
