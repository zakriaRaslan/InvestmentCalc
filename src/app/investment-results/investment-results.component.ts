import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalcService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// results = input<AnnualData[] | undefined>(undefined)
// @Input() results?:AnnualData[]
private investmentService = inject(InvestmentCalcService)

// results = computed(()=> this.investmentService.investmentResults())
results = this.investmentService.investmentResults.asReadonly();

// get results(){
// return this.investmentService.investmentResults
// }
}

