import { Routes } from '@angular/router';
import { InvestmentList } from './components/investment-list/investment-list';
import { FindMyInvestment } from './components/find-my-investment/find-my-investment';
import { AddInvestment } from './components/add-investment/add-investment';
import { DeleteInvestment } from './components/delete-investment/delete-investment';

export const routes: Routes = [
    {
        path: 'investment-list',
        component: InvestmentList
    },
    {
        path: 'find',
        component: FindMyInvestment
    },
    {
        path: 'addInvestment',
        component: AddInvestment
    },
    {
        path:'deleteInvestment',
        component: DeleteInvestment
    }
];
