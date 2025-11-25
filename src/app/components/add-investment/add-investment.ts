import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../models/investment.model';
import { InvestmentService } from '../../services/investment-service';

@Component({
  selector: 'app-add-investment',
  imports: [FormsModule],
  templateUrl: './add-investment.html',
  styleUrl: './add-investment.css',
})
export class AddInvestment {
investment: Investment = { id: 0, name: '', type: 'Equity', amount: 0, purchaseDate: '', currentValue: 0 };
successMessage: string = '';
errorMessage: string = '';

constructor(private investmentService: InvestmentService) {}
generateUniqueId(): number {
  return Date.now(); // Generates a unique ID based on the current timestamp
}

ngOnInit() {
  this.investment.id = this.generateUniqueId(); // Assign a unique ID when the component initializes
}
addInvestment() {
  this.investmentService.addInvestment(this.investment).subscribe({
    next: (response) => {
      this.successMessage = 'Investment added successfully!';
      alert(this.successMessage);
      this.investment = { id: 0, name: '', type: 'Equity', amount: 0, purchaseDate: '', currentValue: 0 }; // Reset the form
    },
    error: (error) => {
      this.errorMessage = 'Failed to add investment. Please try again.';
      alert(this.errorMessage);
      console.error(error);
    },
  });
}
}
