import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsComponent } from './facts/facts.component';
import { FactComponent } from './fact/fact.component';

const routes: Routes = [
  { path: '', component: FactsComponent },
  { path: 'facts/:id', component: FactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

