import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserEditService} from '../../services/user-edit.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {};
  access_token: string;
  constructor(
    private userEditService: UserEditService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
    const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.user.id = params['id'];
    });
    this.userEditService.getUser(id, this.access_token).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateUser(id: number) {
    console.log(this.user.username);
    console.log(this.user.role);
    this.userEditService.updateUser(id, this.user.username, this.user.password, this.user.role, this.access_token)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/user-list']);
        },
        error => {
          console.error(error);
        }
      );
  }
}
