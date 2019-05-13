import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import {IsAuthenticatedGuard} from '../../../guards';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {

  appRouterUrls = AppRouterUrls;

  constructor(private auth: IsAuthenticatedGuard, private authService: AuthService) {}
}
