import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router)
  const authService = inject(AuthService)

  return next(req).pipe(
    catchError((error) => {

      switch (error.status) {

        case 401: console.log('Unauthorized')

          authService.logout()

          router.navigate(['/login'])

          break;

        case 403: console.log('Forbidden')

          break;

        case 404: console.log('Not Found')

          break;

        case 500: console.log('Server Error')

          break;

        default: console.log('Something went wrong')

      }

      return throwError(() => error)
    })
  )

};
