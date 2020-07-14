import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './Components/Session/session.component';
import { HotelComponentComponent } from './Components/Providers/hotel-component/hotel-component.component';

const routes: Routes = [
  {path: '', component: SessionComponent},
  {path: 'hotels', component: HotelComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
