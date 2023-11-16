import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SliderComponent } from './slider/slider.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [

  { path: 'calculator', component: CalculatorComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'toolbar', component: ToolbarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
