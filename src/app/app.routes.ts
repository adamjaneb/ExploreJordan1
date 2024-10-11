import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: BodyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-post/:id', component: BlogPostComponent },
  { path: 'categories/:category', component: CategoriesComponent }
];