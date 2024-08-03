import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {
  account: any;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    if (accountNumber) {
      this.accountService.getAccount(accountNumber).subscribe(response => {
        this.account = response;
      });
    }
  }
}
