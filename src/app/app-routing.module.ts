import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  { path: 'heroes', //path: a string that matches the URL in the browser address bar.
    component: HeroesComponent }, //component: the component that the router should create when navigating to this route
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route 
  { path: 'detail/:id', component: HeroDetailComponent }, //:id is a placeholder for a specific hero id.
  { path: 'name-editor',  component: NameEditorComponent },
  { path: 'profile-editor',  component: ProfileEditorComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // initialize the router and start it listening for browser location changes
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

