export interface Investment {
    id: number;
    name: string;
    amount: number;
    type: 'Equity' | 'Debt' | 'Mutual Fund' ;
    purchaseDate: string; 
    currentValue: number;
}