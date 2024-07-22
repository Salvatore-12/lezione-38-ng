import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule,
            FormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            MatButtonModule,
            ReactiveFormsModule,
            RouterModule,
            HttpClientModule],
  exports: [CommonModule,FormsModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule,RouterModule,HttpClientModule]
})
export class SharedModule { }