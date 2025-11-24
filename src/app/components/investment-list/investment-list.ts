import { Component, OnInit, signal } from '@angular/core';
import { Investment } from '../../models/investment.model';
import { InvestmentService } from '../../services/investment-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-list',
  imports: [CommonModule],
  templateUrl: './investment-list.html',
  styleUrl: './investment-list.css',
})
export class InvestmentList implements OnInit{
allInvestmentsList = signal<Investment[]>([]);

constructor(
  private investmentService: InvestmentService
) {
}

ngOnInit() {
  this.investmentService.loadInvestments();
}

displayAllInvestments() {
  this.allInvestmentsList.set(this.investmentService.investments());
}

}
