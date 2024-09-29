import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component:BodyComponent},
  {path: 'about-us', component:AboutUsComponent}
]