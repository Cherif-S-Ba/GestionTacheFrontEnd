import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {};
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  authUser(): void {
    this.authService.login(this.user).subscribe(
      (data) => {
        this.authService.auth(data);
      },
      (err) => {
          this.errorMessage = 'Veuillez vérifier vos informations de connexion.';
      }
    );
  }

}

