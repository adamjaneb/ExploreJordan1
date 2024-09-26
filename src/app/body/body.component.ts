import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
  slide1 : string = "assets/slide1.png";
  slide2 : string = "assets/slide2.png";
  slide3 : string = "assets/slide3.png";
  slide4 : string = "assets/slide4.png";
  images: string[] = [this.slide4, this.slide2, this.slide3, this.slide4];

  currentImage: string = this.images[0];
  currentIndex: number = 0;

  ngOnInit() : void {
    this.slideShow();
  }

  slideShow(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000);
  }

  cancelImg : string = "assets/cancel.png";
  custom_packageImg : string = "assets/custom_package.png";
  loyalty_programImg : string = "assets/loyalty_program.jpg";
}
