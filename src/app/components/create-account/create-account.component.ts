import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.accountForm = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.maxLength(10)]],
      balance: ['', Validators.required],
      customerId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      this.accountService.createAccount(this.accountForm.value).subscribe(response => {
        console.log('Account created successfully', response);
      });
    }
  }
}
