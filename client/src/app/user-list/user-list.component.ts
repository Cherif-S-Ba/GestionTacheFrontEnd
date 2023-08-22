import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  selectedTacheId: string;
  constructor(private userListService: UserListService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userListService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    );
  }
  openConfirmDeleteModal(content, id) {
    this.selectedTacheId = id;
    this.modalService.open(content, { centered: true });
  }

  confirmDelete() {
    if (this.selectedTacheId) {
      this.userListService.deleteUser(Number(this.selectedTacheId)).subscribe(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error);
          window.location.reload();
        }
      );
    }
    this.modalService.dismissAll();
  }
}

