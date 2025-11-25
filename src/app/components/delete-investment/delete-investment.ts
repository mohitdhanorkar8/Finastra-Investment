import { Component, signal } from '@angular/core';
import { inject, Signal } from '@angular/core';
import { InvestmentService } from '../../services/investment-service';
import { Investment } from '../../models/investment.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-investment',
  imports: [CurrencyPipe, DatePipe,FormsModule],
  templateUrl: './delete-investment.html',
  styleUrl: './delete-investment.css',
})
export class DeleteInvestment {
  investment = signal<Investment | null>(null);
  private investmentService = inject(InvestmentService);
investmentId: any;

  fetchInvestmentById(id: number): void {
    this.investmentService.getInvestmentById(id).subscribe({
      next: (investment) => {
        this.investment.set(investment);
        console.log('Investment details:', investment);
        alert(`Investment details: ${JSON.stringify(investment)}`);
      },
      error: (err) => console.error('Error fetching investment details:', err),
    });
  }

  deleteInvestmentById(id: number): void {
    this.investmentService.deleteInvestment(id).subscribe({
      next: () => {
        console.log(`Investment with ID ${id} deleted successfully.`);
        alert(`Investment with ID ${id} deleted successfully.`);
        this.investment.set(null);
      },
      error: (err) => console.error('Error deleting investment:', err),
    });
  }
}
