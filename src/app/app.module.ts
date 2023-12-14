import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SliderComponent } from './slider/slider.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataService } from './services/data.service';
import { CinemaComponent } from './cinema/cinema.component';
import { PipePipe } from './pipes/pipe.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AdminComponent } from './auth-component/admin/admin.component';
import { TenttiComponent } from './tentti/tentti.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent,
    SliderComponent,
    PagenotfoundComponent,
    ReactiveFormComponent,
    CinemaComponent,
    PipePipe,
    TemplateDrivenFormComponent,
    AuthComponentComponent,
    AdminComponent,
    TenttiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatExpansionModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
