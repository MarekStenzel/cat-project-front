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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
