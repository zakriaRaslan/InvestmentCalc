import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInvestmentInputs } from '../user-investment.model';
import { InvestmentCalcService } from '../investment.service';
@Component({
  selector: 'app-user-inputs',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css',
})
export class UserInputsComponent {
  // calculate = output<UserInvestmentInputs>(); // this way used from Angular 17.3 and ↑
  // @Output() calculate = new EventEmitter<UserInvestmentInputs>(); // this is the traditional way
  UserInputs?:UserInvestmentInputs;
  initialInvestmentValue = ('0');
  annualInvestmentValue = ('0');
  expectedReturnValue =('5');
  durationValue = ('10');


  constructor(public InvestmentService : InvestmentCalcService){

  }
  onSubmit() {
    this.UserInputs={
      initialInvestment : +this.initialInvestmentValue,
      annualInvestment : +this.annualInvestmentValue,
      expectedReturn : +this.expectedReturnValue,
      duration : +this.durationValue
    }
    this.InvestmentService.calculateInvestmentResults(this.UserInputs)
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestmentValue(),
    //   annualInvestment: +this.annualInvestmentValue(),
    //   expectedReturn: +this.expectedReturnValue(),
    //   duration: +this.durationValue(),
    // });
    this.initialInvestmentValue = '0';
    this.annualInvestmentValue = '0';
    this.expectedReturnValue = '5';
    this.durationValue = '10';
  }
}
