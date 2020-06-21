import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { GenericService } from 'src/app/shared/services/generic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const baseUrl = 'http://localhost:8080/login';

@Injectable({providedIn: 'root'})
export class AuthService extends GenericService {

    constructor(private http: HttpClient, 
        private tokenService: TokenService,
        protected snackBar: MatSnackBar) {        
            super(snackBar);
    }

    authenticate(userName: string, password: string) {
        return this.http.post(baseUrl, {userName, password}, { observe: 'response' })
            .pipe(
                tap(res => {
                    const authToken = res.headers.get('Authorization');
                    this.tokenService.setToken(authToken);
                }),
                catchError(e => this.errorHandler(e))
            );
    }
}