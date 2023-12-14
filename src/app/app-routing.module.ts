import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SliderComponent } from './slider/slider.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CinemaComponent } from './cinema/cinema.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { TenttiComponent } from './tentti/tentti.component';


const routes: Routes = [

  { path: 'calculator', component: CalculatorComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'tempalte-driven-form', component: TemplateDrivenFormComponent },
  { path: 'tentti', component: TenttiComponent },
  { path: 'AuthComponent', component: AuthComponentComponent },
  { path: 'login/admin', component: AuthComponentComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
