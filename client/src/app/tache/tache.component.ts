import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../services/tache.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  user: any;
  tache = {};
  taches: any;
  access_token: any;
  utilisateur: any;
  selectedTacheId: string;
  constructor(private tacheService: TacheService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.loadTaches();
  }
  loadTaches() {
    this.access_token = localStorage.getItem('access_token');
    const username = localStorage.getItem('username');

    this.tacheService.getUserInfos(username).subscribe(data => {
      this.user = data;
      localStorage.setItem('user_id', this.user.id);

      this.tacheService.getTaches().subscribe(data => {
        this.taches = data;
        for (const tache of this.taches) {
          this.tacheService.getUserById(tache.utilisateur.id).subscribe(userdata => {
            tache.utilisateur = userdata;
            console.log(this.taches);
            console.log(tache.utilisateur);
          });
        }
      });
    });
  }
 openConfirmDeleteModal(content, id) {
    this.selectedTacheId = id;
    this.modalService.open(content, { centered: true });
  }

  confirmDelete() {
    if (this.selectedTacheId) {
      this.tacheService.deleteTache(Number(this.selectedTacheId)).subscribe(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.modalService.dismissAll();
  }
}
