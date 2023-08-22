import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { TacheComponent } from './tache/tache.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { TacheCreateComponent } from './tache-create/tache-create.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { NavComponent } from './nav/nav.component';
import {AuthService} from '../services/auth.service';
import {TacheService} from '../services/tache.service';
import {TacheCreateService} from '../services/tache-create.service';
import { UserListComponent } from './user-list/user-list.component';
import {UserListService} from '../services/user-list.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UserEditService} from '../services/user-edit.service';


@NgModule({
  declarations: [
    AppComponent,
    TacheComponent,
    UserComponent,
    UserCreateComponent,
    TacheCreateComponent,
    TacheEditComponent,
    NavComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthService,
    TacheService,
    TacheCreateService,
    UserListService,
    UserEditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
