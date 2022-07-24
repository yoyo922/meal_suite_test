import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details/details.component";
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "details", component: DetailsComponent },
  { path: "list", component: ListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
