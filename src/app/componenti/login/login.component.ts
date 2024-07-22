
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  constructor(){}

  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm){
    const email = form.value
    const password = form.value
  }

}
