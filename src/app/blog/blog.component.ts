import { Component } from '@angular/core';
import { BlogService,BlogPost } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {
    this.blogPosts = this.blogService.getBlogPosts();
  }
}