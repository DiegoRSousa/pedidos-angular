import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
    
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService, 
        private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(): void {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password).subscribe(
            () => { this.router.navigate(['/home'])},
            () => {
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
            }
        );
    }

}