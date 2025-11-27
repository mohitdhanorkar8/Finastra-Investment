import { InvestmentService } from '../../services/investment-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../models/investment.model';

@Component({
  selector: 'app-add-investment',
  imports: [FormsModule],
  templateUrl: './add-investment.html',
  styleUrl: './add-investment.css',
})
export class AddInvestment implements OnInit {
  // changed to 'any' so id can be a string without requiring model changes
  investment: any = { id: '0', name: '', type: 'Equity', amount: 0, purchaseDate: '', currentValue: 0 };
  successMessage: string = '';
  errorMessage: string = '';
  private lastId: number = -1;

  constructor(private investmentService: InvestmentService) {}

  // incremental id generator: first call -> "0"
  generateUniqueId(): string {
    this.lastId++;
    return String(this.lastId);
  }

  ngOnInit() {
    // if id is empty / falsy (but allow "0"), generate one
    if (!this.investment.id && this.investment.id !== '0') {
      this.investment.id = this.generateUniqueId();
    } else {
      // try to parse existing string id to a number to update lastId
      const parsed = Number(this.investment.id);
      if (!isNaN(parsed) && parsed >= 0) {
        this.lastId = Math.max(this.lastId, parsed);
      } else {
        this.investment.id = this.generateUniqueId();
      }
    }

    // ensure we have at least id "0" if nothing set
    if (this.lastId === -1) {
      this.investment.id = this.generateUniqueId();
    }
  }

  addInvestment() {
    this.investmentService.addInvestment(this.investment).subscribe({
      next: (response) => {
        this.successMessage = 'Investment added successfully!';
        alert(this.successMessage);
        // prepare a fresh form with the next string id (auto-increment)
        this.investment = { id: this.generateUniqueId(), name: '', type: 'Equity', amount: 0, purchaseDate: '', currentValue: 0 };
      },
      error: (error) => {
        this.errorMessage = 'Failed to add investment. Please try again.';
        alert(this.errorMessage);
        console.error(error);
      },
    });
  }
}
