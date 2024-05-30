import { NgFor, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  activeImageIndex = 0;

  sliderArray = [
    '/assets/img/bg/img-2.jpeg',
    '/assets/img/bg/img-3.jpg',
  ];
  constructor(@Inject(PLATFORM_ID) id: any) {
    if (isPlatformServer(id)) {
      return;
    }
    setInterval(() => {
      this.activeImageIndex++;
      if (this.activeImageIndex === this.sliderArray.length) {
        this.activeImageIndex = 0;
      }
    }, 5000);
  }

  nextindex() {
    this.activeImageIndex++;
    if (this.activeImageIndex === this.sliderArray.length) {
      this.activeImageIndex = 0;
    }
  }
  previousindex() {
    if (this.activeImageIndex > 0) {
      this.activeImageIndex--;
      if (this.activeImageIndex === this.sliderArray.length) {
        this.activeImageIndex = 0;
      }
    }
  }
}
