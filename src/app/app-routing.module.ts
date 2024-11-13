import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FruitsComponent  } from "./fruits/fruits.component";
import { VegetableComponent  } from "./vegetable/vegetable.component";
import { SpeciesComponent  } from "./species/species.component";
import { SweComponent  } from "./swe/swe.component";

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'fruitspage', component: FruitsComponent },
  { path: 'veg', component: VegetableComponent },
  { path: 'spi', component: SpeciesComponent },
  { path: 'swe', component: SweComponent },


  // { path: 'fruits', component: FruitsComponent },
  // { path: 'vegetables', component: VegetablesComponent },
  // { path: 'spices', component: SpicesComponent },
  // { path: 'sweeteners', component: SweetenersComponent },
  // { path: 'fruits', component: FruitsComponent },
  // { path: 'vegetables', component: VegetablesComponent },
  // { path: 'spices', component: SpicesComponent },
  // { path: 'sweeteners', component: SweetenersComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
