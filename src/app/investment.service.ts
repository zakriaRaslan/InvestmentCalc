import { Injectable, signal } from "@angular/core";
import { AnnualData, UserInvestmentInputs } from "./user-investment.model";

@Injectable({"providedIn":"root"})
export class InvestmentCalcService
{

  investmentResults = signal<AnnualData[] | undefined>(undefined)

  calculateInvestmentResults(data:UserInvestmentInputs) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentResults.set(annualData);
  }
}
