import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightMenuComponent } from './components/side-menu/right-menu/right-menu.component';
import { LeftMenuComponent } from './components/side-menu/left-menu/left-menu.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatsProfilesComponent } from './components/cats-profiles/cats-profiles.component';
import { CatsMemesComponent } from './components/cats-memes/cats-memes.component';
import { AdoptCatComponent } from './components/adopt-cat/adopt-cat.component';
import { CatsFoundationsComponent } from './components/cats-foundations/cats-foundations.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { GraphqlModule} from './graphql/graphql.module';
import { GraphqlConnectionService } from './graphql/graphqlconnection.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import {CatApiService} from './services/catapi.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    RightMenuComponent,
    LeftMenuComponent,
    CatsProfilesComponent,
    CatsMemesComponent,
    AdoptCatComponent,
    CatsFoundationsComponent,
    HelpComponent,
    ContactComponent,
    UserProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    GraphqlModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [GraphqlConnectionService, AuthService, CatApiService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
