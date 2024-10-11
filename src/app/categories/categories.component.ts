import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  apiUrl = environment.apiUrl;
  items: any[] = [];
  category: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  onImageLoad(imageUrl: string) {
    console.log('Image loaded:', imageUrl);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.fetchItems();
    });
  }

  fetchItems() {
    this.http.get<any[]>(`${this.apiUrl}/${this.category}`)
      .subscribe({
        next: (response) => {
          console.log(`${this.category} fetched successfully:`, response);
          // Append the full path without /api
          this.items = response.map(item => ({
            ...item,
            cover: `http://localhost:5241/assets/images/${item.cover}` // Correct URL
          }));
        },
        error: (error) => {
          console.error(`Error fetching ${this.category}:`, error);
        }
      });
}

}