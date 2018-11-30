import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { environment } from '../environments/environment';
import { BoardsComponent } from './boards/boards.component';
import { BoardsDetailComponent } from './boards-detail/boards-detail.component';
import { BoardsCreateComponent } from './boards-create/boards-create.component';
import { BoardsEditComponent } from './boards-edit/boards-edit.component'

const appRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
  },

  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
  },

  {
    path: 'boards-create',
    component: BoardsCreateComponent,
  },

  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
  },

  { 
   path: '',
   redirectTo: '/boards', 
   pathMatch: 'full' 
  },

]


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardsDetailComponent,
    BoardsCreateComponent,
    BoardsEditComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
