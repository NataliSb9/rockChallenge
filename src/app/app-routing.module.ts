import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingRockAppComponent } from './pages/landing-rock-app/landing-rock-app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormAddBandComponent } from './pages/form-add-band/form-add-band.component';
import { InfoBandaComponent } from './pages/info-banda/info-banda.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';




const routes: Routes = 
[
  {
    path: '', component: LandingRockAppComponent
  },
  {
    path:'formBand', component: FormAddBandComponent
  },
  {
    path: 'landingPage', component: LandingRockAppComponent
  },
  {
    path: 'infoBand', component: InfoBandaComponent 
  },
  {
    path: 'editBand', component: FormEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
