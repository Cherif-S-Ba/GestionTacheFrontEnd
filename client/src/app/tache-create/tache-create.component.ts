import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TacheCreateService} from '../../services/tache-create.service';

@Component({
  selector: 'app-tache-create',
  templateUrl: './tache-create.component.html',
  styleUrls: ['./tache-create.component.css']
})
export class TacheCreateComponent implements OnInit {

  tache = {
    nom: '',
    dateCreation: '',
    dateRealisation: '',
    description: '',
    utilisateur: null

  };
  date1: Date;
  date2: Date;
  access_token: any;
  id: number;
  constructor(private tacheCreateService: TacheCreateService, private router: Router) { }

  ngOnInit() {
  }
  saveTache() {
    this.date1 = new Date(this.tache.dateCreation);
    this.date2 = new Date(this.tache.dateRealisation);
    if (this.date1 <= this.date2) {
      this.tacheCreateService.createTache(this.tache).subscribe(
        () => {
          this.router.navigate(['/tache']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('La date de création doit être inférieur à la date de réalisation.');
  }
}
}
