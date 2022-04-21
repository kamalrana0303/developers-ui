import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, exhaustMap, catchError, tap, mergeMap} from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { MatDialog} from "@angular/material/dialog"
import * as AuthActions from './auth.actions';
import { EMPTY, of } from 'rxjs';
import { LogoutPromptComponent } from '../logout-prompt/logout-prompt.component';

@Injectable()
export class AuthEffects{
   
   login$= createEffect(()=>this.actions$.pipe(
    ofType(AuthActions.login),
    map((action)=>  action.authenticate),
    exhaustMap(auth=>
     this.authService
     .login(auth)
     .pipe(
         map(token=>{ 
             return AuthActions.loginSuccess({token})
            }),
         catchError(error=> of(AuthActions.loginFailure(error)))
     ))
    ));

 
   loginRedirect$= createEffect(()=>this.actions$
   .pipe(ofType(AuthActions.loginSuccess))
   .pipe(tap(()=> {this.router.navigate(["/home"])})), {dispatch:false});

 
   logoutConfirmation$=createEffect(()=>this.actions$
   .pipe(ofType(AuthActions.logOut))
   .pipe(
       exhaustMap(()=>
       this.dialogService
       .open(LogoutPromptComponent)
       .afterClosed()
       .pipe(
           mergeMap(confirmed=>{
               if(confirmed){
                   return of(AuthActions.logOutConfirmed())
               }
               else{
                   return EMPTY;
               }
           })
       ))
   ))

   logout$= createEffect(()=>this.actions$
   .pipe(ofType (AuthActions.logOutConfirmed))
   .pipe(
       exhaustMap(auth=>
        this.authService.logOut()
        .pipe(
            tap(()=> this.router.navigate(['/login'])),
            map(()=> AuthActions.logOutComplete()),
            catchError(()=> of(AuthActions.logOutComplete())),
        )),
   ),{dispatch:false});
  
    constructor(
        private router: Router,
        private dialogService: MatDialog,
        private actions$: Actions,
        private authService: AuthenticationService){}
        
}