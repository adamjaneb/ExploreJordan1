import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component:BodyComponent}
]