import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlConnectionService } from './graphql/graphqlconnection.service';
import { AuthService } from './services/auth.service';
import { AppRouterUrls, AppRoutes } from './app-routing-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  routerUrls = AppRouterUrls;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router,
              private graphqlService: GraphqlConnectionService,
              private authService: AuthService) {
    this.graphqlService.establishConnections();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  logout() {
    this.authService.isAuthenticated = false;
    this.router.navigate([AppRoutes.DEFAULT]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
