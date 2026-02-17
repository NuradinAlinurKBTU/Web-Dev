import { Routes } from '@angular/router';
import { Home } from './home';
import { User } from './user';

export const routes: Routes = [
  { path: '', title: 'App Home Page', component: Home },
  { path: 'about', title: 'App User Page', component: User }
];
