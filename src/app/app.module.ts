import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModules } from "./user-inputs/user-inputs.module";

@NgModule({
declarations:[AppComponent,HeaderComponent ,InvestmentResultsComponent],
bootstrap:[AppComponent],
imports:[BrowserModule , UserInputModules]
})

export class AppModule
{

}
