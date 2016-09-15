import { RouterConfig } from '@angular/router';
import { LoginComponent } from './authentication.component';
import { LogoutComponent } from './logout.component';

export const AuthenticationRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];
