import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SeminarComponent } from './seminar/seminar.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StuhomeComponent } from './stuhome/stuhome.component';
const routing:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'stuhome',component:StuhomeComponent},
    
    {path:'login',component:LoginComponent},
    
    {path:'about',component:AboutComponent},
    {path:'course',component:CourseComponent},
    {path:'event',component:EventComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'gallary',component:GallaryComponent},
    {path:'newsfeed',component:NewsfeedComponent},
    {path:'seminar',component:SeminarComponent},
    {path:'service',component:ServiceComponent},
    {path:'register',component:RegisterComponent}
    
    
    
    
    
    
    
    
];

export const routingArray=RouterModule.forRoot(routing);

