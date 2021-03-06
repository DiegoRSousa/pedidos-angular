import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GenericService {

    constructor(protected snackBar: MatSnackBar){}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
      }

      errorHandler(e: any): Observable<any> {
        this.showMessage(e.message, true);
        return EMPTY;
      }
}