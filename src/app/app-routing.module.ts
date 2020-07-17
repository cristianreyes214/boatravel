import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './Components/Session/session.component';
import { HotelComponentComponent } from './Components/Providers/hotel-component/hotel-component.component';
import { RegisterProvidersComponent } from './Components/Providers/register-providers/register-providers.component';
import { RegisterCompanyComponent } from './Components/Providers/register-company/register-company.component';

const routes: Routes = [
  {path: '', component: SessionComponent},
  {path: 'hotels', component: HotelComponentComponent},
  {path: 'registerProvider', component: RegisterProvidersComponent},
  {path: 'registerCompany', component: RegisterCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
