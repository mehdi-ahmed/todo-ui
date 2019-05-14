import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate : [RouteGuardService]},
  { path: 'todos', component: TodoListComponent, canActivate : [RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate : [RouteGuardService]},
  { path: 'todos/:id', component: TodoComponent, canActivate : [RouteGuardService]},

  // This should be at the end, order is important
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
