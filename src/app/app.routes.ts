import { Routes } from '@angular/router';
import { InvestmentList } from './components/investment-list/investment-list';
import { FindMyInvestment } from './components/find-my-investment/find-my-investment';

export const routes: Routes = [
    {
        path: 'investment-list',
        component: InvestmentList
    },
    {
        path: 'find',
        component: FindMyInvestment
    }
];
