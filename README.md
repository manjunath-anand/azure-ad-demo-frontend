# Demo application for Azure AD blogpost
The master branch contains the unsecured version.
For the final version, check out the `final` branch.

The [back-end code](https://github.com/jmeys/azure-ad-demo-backend) is on Github as well.




Check this code 
app.component.ts:-

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
  // Sample: Login method
  public login() {
    this.oauthService.initImplicitFlow();
  }

  // Sample: Logout method
  public logout() {
    this.oauthService.logOut();
  }
// Sample: Call this function before using the access token, to make sure you have a valid access token
  public getToken() {
    if (!this.oauthService.hasValidAccessToken()) {
      console.log("Refreshing the token")
      this.oauthService.silentRefresh();
    }
    else
    {
      console.log("Token is still valid")
    };
  }

  // Sample: Get the dispaly name claim
  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }

  // Sample: Get the access token
  public get token() {
    return this.oauthService.getAccessToken();
  }

  // Sample: Get the access token expiration ticks (numeric)
  public get tokenExpiration() {
    return new Date(this.oauthService.getAccessTokenExpiration());
  }

  // Sample: Get the access token expiration date (in date format)
  public get tokenExpirationDate() {
    return this.oauthService.getAccessTokenExpiration();
  }
}
