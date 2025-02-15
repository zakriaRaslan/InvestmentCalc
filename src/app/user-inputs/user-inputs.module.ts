import { NgModule } from "@angular/core";
import { UserInputsComponent } from "./user-inputs.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[UserInputsComponent],
  imports:[FormsModule],
  exports:[UserInputsComponent]
})
export class UserInputModules{

}
