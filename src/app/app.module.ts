import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from './error/error.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo/todo.component';
import {DatePipe} from '@angular/common';
import {HttpInterceptorBasicAuthService} from './service/http/http-intercepter-basic-auth.service';
import {HttpErrorInterceptor} from './service/http/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
