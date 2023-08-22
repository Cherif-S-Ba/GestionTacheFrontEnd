import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TacheComponent} from './tache/tache.component';
import { UserComponent } from './user/user.component';
import { TacheCreateComponent } from './tache-create/tache-create.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
  /*{path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent}*/
  {
    path: 'tache',
    component: TacheComponent,
    data: { title: 'Liste tache' }
  },
  { path: '',
    redirectTo: '/huser',
    pathMatch: 'full'
  },
  {
    path: 'huser',
    component: UserComponent,
    data: { title: 'S\'authentifier' }
  },
  {
    path: 'huser-create',
    component: UserCreateComponent,
    data: { title: 'Creer un utilisateur' }
  },
  {
    path: 'tache-create',
    component: TacheCreateComponent,
    data: { title: 'Ajouter tache' }
  },
  {
    path: 'tache-edit/:id',
    component: TacheEditComponent,
    data: { title: ' Modifer tache' }
  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: ' Creer un utilisateur' }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: { title: ' Liste des utilisateur' }
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: { title: 'Modifier un utilisateur' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
