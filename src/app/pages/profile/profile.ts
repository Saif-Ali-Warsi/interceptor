import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import {  } from '@angular/core';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit{

private authService = inject(AuthService)

ngOnInit() {
  this.authService.getProfile().subscribe((res)=>{
    console.log(res)
  })
}

}
