import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { SpeciesComponent } from './species/species.component';
import { SweComponent } from './swe/swe.component';
import { AppleComponent } from './fruits/apple/apple.component';
import {PomoComponent} from "./fruits/pomo/pomo.component";
import {MangoComponent} from "./fruits/mango/mango.component";
import {SapodillaComponent} from "./fruits/sapodilla/sapodilla.component";
import {JackFruitComponent} from "./fruits/jack-fruit/jack-fruit.component";
import {WaterMelonComponent} from "./fruits/water-melon/water-melon.component";
import {PineappleComponent} from "./fruits/pineapple/pineapple.component";
import {AvocadoComponent} from "./fruits/avocado/avocado.component";
import {PapayaComponent} from "./fruits/papaya/papaya.component";
import {BananaComponent} from "./fruits/banana/banana.component";
import {LemonComponent} from "./fruits/lemon/lemon.component";
import {BrinjalComponent} from "./vegetable/brinjal/brinjal.component";
import {CucumberComponent} from "./vegetable/cucumber/cucumber.component";
import {DrumStickComponent} from "./vegetable/drum-stick/drum-stick.component";
import {CauliFlowerComponent} from "./vegetable/cauli-flower/cauli-flower.component";
import {CarrotComponent} from "./vegetable/carrot/carrot.component";
import {CabbageComponent} from "./vegetable/cabbage/cabbage.component";
import {ChilliComponent} from "./vegetable/chilli/chilli.component";
import {CoconutComponent} from "./vegetable/coconut/coconut.component";
import {PepperComponent} from "./species/pepper/pepper.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    ProductsComponent,
    FruitsComponent,
    VegetableComponent,
    SpeciesComponent,
    SweComponent,
    AppleComponent,
    PomoComponent,
    MangoComponent,
    SapodillaComponent,
    JackFruitComponent,
    WaterMelonComponent,
    PineappleComponent,
    AvocadoComponent,
    PapayaComponent,
    BananaComponent,
    LemonComponent,
    BrinjalComponent,
    CucumberComponent,
    DrumStickComponent,
    CauliFlowerComponent,
    CarrotComponent,
    CabbageComponent,
    ChilliComponent,
    CoconutComponent,
    PepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
