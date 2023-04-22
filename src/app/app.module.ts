import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CreateHotelDetailsComponent,
    HotelDetailsComponent,
    HotelListComponent,
    UpdateHotelDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    LogOutComponent,
    FeedbackComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
