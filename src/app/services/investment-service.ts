import { Injectable, signal } from '@angular/core';
import { Investment } from '../models/investment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private apiURl = 'http://localhost:3000/investments';

  //Signal to hold the investments
  investments = signal<Investment[]>([]); 

  constructor(
    private http: HttpClient
  ) {
  }

  //Fetch investments from the backend
  loadInvestments() {
    this.http.get<Investment[]>(this.apiURl).subscribe((data) => {
      this.investments.set(data);
    });
  } 

  getInvestmentById(id: number): Observable<Investment> {
    return this.http.get<Investment>(`${this.apiURl}/${id}`);
  }
}
