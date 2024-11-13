import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private router: Router) {}



  navigateTo(route: string): void {
    this.router.navigate([route]);
  }


  products = [
    { name: 'Coffee', image: '/assets/Images/cof.webp', details: 'Coffee is more than just a beverage; a global cultural phenomenon, a daily ritual, and a source of comfort for millions around the world. From its origins in ancient Ethiopia to its status as a modern-day staple, coffee has woven itself into the fabric of societies, influencing everything from social interactions to the global economy.' },
    { name: 'Chilli', image: '/assets/Images/chil.jpg', details: 'Dry chili, also known as dried chili peppers, is a potent and flavorful spice that adds heat and depth to a wide range of dishes. This ingredient is a staple in many cuisines around the world, prized for its intense heat, vibrant color, and rich, smoky flavor.' },
    { name: 'Pepper', image: '/assets/Images/pepp.jpg', details: 'Pepper is a widely used and versatile ingredient that plays a significant role in global cuisine. It comes in various forms, the most common being black pepper, green pepper, white pepper, and bell pepper, each with its unique flavor profile and culinary applications.' },
    // Add more products as needed
  ];

  isPopupVisible = false;
  selectedProduct: any;

  openPopup(product: any) {
    this.selectedProduct = product;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}


