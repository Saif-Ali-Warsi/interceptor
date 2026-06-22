import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private authService = inject(AuthService)

  login() {
    const payload = {
      username: 'emilys',
      password: 'emilyspass'
    }

    this.authService.login(payload).subscribe(
      (res: any) => {
        console.log(res)

        this.authService.saveToken(res.accessToken
        )
      }
    )
  }

}
