import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  accounts: any[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(response => {
      this.accounts = response;
    });
  }
}
