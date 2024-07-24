import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from '../../shared.module';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {}

  logout(){
    this.authService.logout()
  }

}
