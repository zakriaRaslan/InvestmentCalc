import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputsComponent, InvestmentResultsComponent],
})
export class AppComponent {
//  investmentResults = signal<AnnualData[] | undefined>(undefined);

//  calculateInvestmentResults(data:UserInvestmentInputs) {
//   const { initialInvestment, annualInvestment, expectedReturn, duration } =
//     data;
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalInterest =
//       investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalInterest: totalInterest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }

//   this.investmentResults.set(annualData);
// }
}
