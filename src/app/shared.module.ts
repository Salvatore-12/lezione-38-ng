import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [CommonModule,
            FormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            MatToolbarModule,
            MatIconModule, 
            MatTableModule,
            ReactiveFormsModule,
            RouterModule,
            HttpClientModule,
            MatCardModule],

  exports: [CommonModule,
            FormsModule,
            MatInputModule, 
            MatSelectModule, 
            MatFormFieldModule, 
            MatButtonModule, 
            MatSidenavModule, 
            MatListModule, 
            MatToolbarModule, 
            MatIconModule, 
            MatTableModule, 
            ReactiveFormsModule, 
            RouterModule, 
            HttpClientModule,MatCardModule]
})
export class SharedModule { }