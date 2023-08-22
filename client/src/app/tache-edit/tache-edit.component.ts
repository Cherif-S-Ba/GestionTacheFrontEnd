import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TacheEditService} from '../../services/tache-edit.service';

@Component({
  selector: 'app-tache-edit',
  templateUrl: './tache-edit.component.html',
  styleUrls: ['./tache-edit.component.css']
})
export class TacheEditComponent implements OnInit {
  tache: any = {};
  date1: Date;
  date2: Date;
  access_token: string;
  erreurMessage: string;

  constructor(private tacheEditService: TacheEditService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
    const id = this.route.snapshot.params['id'];

    this.tacheEditService.getTache(id, this.access_token).subscribe(
      (data) => {
        this.tache = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateTache(id: number) {
    this.date1 = new Date(this.tache.dateCreation);
    this.date2 = new Date(this.tache.dateRealisation);
    if (this.date1 <= this.date2) {
      this.tacheEditService.updateTache(id, this.tache, this.access_token).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/tache']);
        },
        (err) => {
          this.erreurMessage = err;
        }
      );
    } else {
      this.erreurMessage = 'La date de création doit être inférieur à la date de réalisation.';
    }
  }

}
