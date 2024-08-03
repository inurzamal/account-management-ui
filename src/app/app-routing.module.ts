import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { SearchAccountsComponent } from './components/search-accounts/search-accounts.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'view-account/:accountNumber', component: ViewAccountComponent },
  { path: 'list-accounts', component: ListAccountsComponent },
  { path: 'search-accounts', component: SearchAccountsComponent },
  { path: '', redirectTo: '/list-accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
