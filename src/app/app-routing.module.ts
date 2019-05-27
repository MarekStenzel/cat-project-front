import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing-config';
import { CatsProfilesComponent } from './components/cats-profiles/cats-profiles.component';
import { CatsMemesComponent } from './components/cats-memes/cats-memes.component';
import { AdoptCatComponent } from './components/adopt-cat/adopt-cat.component';
import { CatsFoundationsComponent } from './components/cats-foundations/cats-foundations.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: AppRoutes.PROFILES, component: CatsProfilesComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.MEMES, component: CatsMemesComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.ADOPT, component: AdoptCatComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.FOUNDATIONS, component: CatsFoundationsComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.HELP, component: HelpComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.CONTACT, component: ContactComponent, canActivate: [LoginGuard] },
  { path: AppRoutes.USER, component: UserProfileComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
