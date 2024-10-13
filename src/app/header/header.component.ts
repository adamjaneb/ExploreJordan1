import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var google: any;

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logoImg: string = "assets/Logo.png";
  isAuthenticated: boolean = false;
  isDropdownVisible: boolean = false;
  dropdownHeight: string = '100px';
  isTranslateVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkAuthentication();
    this.loadGoogleTranslateScript();
  }

  ngAfterViewInit() {
    this.initGoogleTranslate();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const languageSelector = document.querySelector('.language-selector');
    const profileIcon = document.querySelector('.profile-icon');
    const clickedElement = event.target as HTMLElement;

    if (!languageSelector?.contains(clickedElement)) {
      this.isTranslateVisible = false;
    }

    if (!profileIcon?.contains(clickedElement)) {
      this.isDropdownVisible = false;
    }
  }

  checkAuthentication() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
      this.dropdownHeight = isLoggedIn ? '210px' : '100px';
    });
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
    this.isTranslateVisible = false;
  }

  toggleTranslateDropdown(event: Event) {
    event.stopPropagation();
    this.isTranslateVisible = !this.isTranslateVisible;
    this.isDropdownVisible = false;
  }

  logout() {
    this.authService.logout();
    this.isDropdownVisible = false;
  }

  onSearch(searchQuery: any) {
    // Implement your search functionality
    console.log('Search query:', searchQuery);
    // Add your search logic here
  }

  loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }

  initGoogleTranslate() {
    (window as any).googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,es,fr,de,ja,ko,zh-CN',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };
  }
}