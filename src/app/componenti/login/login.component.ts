
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  constructor(private authService: AuthService){}

  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm){
    const email = form.value
    const password = form.value
    this.authService.signIn(email,password).subscribe((data: any) =>{
      console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn *1000)
      this.authService.createUser(data.email,data.localId,data.idToken,expirationDate)
      localStorage.setItem('user',JSON.stringify(this.authService.user))

      console.log(this.authService.user)
  })
    form.reset()
  }
 

}
