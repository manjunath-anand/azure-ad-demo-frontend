import {Component} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {filter, tap} from 'rxjs/operators';
import { authCodeFlowConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private oauthService: OAuthService) {
      this.oauthService.configure(authCodeFlowConfig); // (1)
      this.oauthService.loadDiscoveryDocumentAndLogin(); // (2)

      this.oauthService.setupAutomaticSilentRefresh(); // (3)
  }
}
