import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-accounts',
  templateUrl: './search-accounts.component.html',
  styleUrls: ['./search-accounts.component.css']
})
export class SearchAccountsComponent {
  searchForm: FormGroup;
  searchResults: any[] = [];

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.searchForm = this.fb.group({
      accountNumber: [''],
      phoneNo: [''],
      customerId: ['']
    });
  }

  onSearch() {
    this.accountService.searchAccounts(this.searchForm.value).subscribe(response => {
      this.searchResults = response;
    });
  }
}
