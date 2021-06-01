import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LandingRockAppComponent } from './pages/landing-rock-app/landing-rock-app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormAddBandComponent } from './pages/form-add-band/form-add-band.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoBandaComponent } from './pages/info-banda/info-banda.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingRockAppComponent,
    FormAddBandComponent,
    InfoBandaComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
