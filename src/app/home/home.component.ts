


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  slides = [
    { image: 'assets/Images/16.png', link: '/content1' },
    { image: 'assets/Images/cof.webp', link: '/content2' },
    { image: 'assets/Images/im7.png', link: '/content3' },
    { image: 'assets/Images/pepp.jpg', link: '/content4' },
    { image: 'assets/Images/im8.png', link: '/content5' }
  ];

  // constructor(
  //
  // ) {
  //   this.contactForm = new FormGroup({
  //     name : new FormControl('',Validators.required),
  //     phone_no: new FormControl('',Validators.required),
  //     email: new FormControl('',Validators.required),
  //     city: new FormControl('',Validators.required),
  //     message: new FormControl('',Validators.required)
  //   })
  // };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);  // 3 seconds interval
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}
