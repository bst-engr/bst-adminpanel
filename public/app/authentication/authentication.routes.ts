import { RouterConfig } from '@angular/router';
import { LoginComponent } from './authentication.component';

export const AuthenticationRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];
