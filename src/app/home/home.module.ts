import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [SigninComponent, HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class HomeModule {}