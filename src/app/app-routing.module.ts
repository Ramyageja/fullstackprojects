import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHotelDetailsComponent } from './create-hotel-details/create-hotel-details.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { UpdateHotelDetailsComponent } from './update-hotel-details/update-hotel-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { LogOutComponent } from './log-out/log-out.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path: 'hotel', component: HotelListComponent,canActivate:[AuthGaurdService] },
  {path: 'create-hotel-details', component: CreateHotelDetailsComponent,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-hotel-details/:hotelId', component: UpdateHotelDetailsComponent,canActivate:[AuthGaurdService] },
  {path: 'hotel-details/:hotelId', component: HotelDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'profile' , component: ProfileComponent,canActivate:[AuthGaurdService] },
  {path: 'logout' , component: LogOutComponent,canActivate:[AuthGaurdService] },
  {path: 'feedback' , component: FeedbackComponent},
  {path: 'about' , component: AboutComponent,canActivate:[AuthGaurdService] },
  {path: 'contact' , component: ContactComponent,canActivate:[AuthGaurdService] },
  {path: 'home' , component: HomeComponent},
  {path: 'reset' , component: ResetPasswordComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
