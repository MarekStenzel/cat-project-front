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

const routes: Routes = [
  { path: '', component: CatsProfilesComponent },
  { path: AppRoutes.MEMES, component: CatsMemesComponent },
  { path: AppRoutes.ADOPT, component: AdoptCatComponent },
  { path: AppRoutes.FOUNDATIONS, component: CatsFoundationsComponent },
  { path: AppRoutes.HELP, component: HelpComponent },
  { path: AppRoutes.CONTACT, component: ContactComponent },
  { path: AppRoutes.USER, component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
