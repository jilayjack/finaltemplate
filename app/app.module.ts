import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginDataService } from './login/login-data-service.service';
import { StudentDataService } from './register/student-data.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routingArray } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { SeminarComponent } from './seminar/seminar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StuhomeComponent } from './stuhome/stuhome.component';
import { StunavbarComponent } from './stunavbar/stunavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    NewsfeedComponent,
    CourseComponent,
    EventComponent,
    SeminarComponent,
    FeedbackComponent,
    GallaryComponent,
    LoginComponent,
    RegisterComponent,
    StuhomeComponent,
    StunavbarComponent
  ],
  imports: [
    BrowserModule,
    routingArray,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginDataService,StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
