import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { SearchAccountsComponent } from './components/search-accounts/search-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ViewAccountComponent,
    ListAccountsComponent,
    SearchAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
