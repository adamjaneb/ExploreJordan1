import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  apiUrl = environment.apiUrl;
  tours: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTours();
  }

  fetchTours() {
    console.log('Fetching tours...');  // Add this log
    this.http.get<any[]>(`${this.apiUrl}/tours`)
      .subscribe({
        next: (response) => {
          console.log('Tours fetched successfully:', response);  // Add this log
          this.tours = response;
        },
        error: (error) => {
          console.error('Error fetching tours:', error);
        }
      });
  }
}