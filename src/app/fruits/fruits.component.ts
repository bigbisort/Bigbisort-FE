import { Component } from '@angular/core';
import { AppleComponent } from '../fruits/apple/apple.component';
import { MatDialog } from '@angular/material/dialog';
import {PomoComponent} from "./pomo/pomo.component";
import {MangoComponent} from "./mango/mango.component";
import {SapodillaComponent} from "./sapodilla/sapodilla.component";
import {JackFruitComponent} from "./jack-fruit/jack-fruit.component";
import {WaterMelonComponent} from "./water-melon/water-melon.component";
import {PineappleComponent} from "./pineapple/pineapple.component";
import {AvocadoComponent} from "./avocado/avocado.component";
import {PapayaComponent} from "./papaya/papaya.component";
import {BananaComponent} from "./banana/banana.component";
import {PeasComponent} from "./peas/peas.component";
import {LemonComponent} from "./lemon/lemon.component";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {


  constructor(public dialog: MatDialog) {}


  openApplePopup() {
    this.dialog.open(AppleComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }

  openPomoPopup() {
    this.dialog.open(PomoComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }

  openMangoPopup() {
    this.dialog.open(MangoComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  sapodillaPopup() {
    this.dialog.open(SapodillaComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  jackFruitPopup() {
    this.dialog.open(JackFruitComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  waterMelonPopup() {
    this.dialog.open(WaterMelonComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  pineApplePopup(){
    this.dialog.open(PineappleComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  avocadoPopup(){
    this.dialog.open(AvocadoComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }

  papayaPopup(){
    this.dialog.open(PapayaComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  bananaPopup(){
    this.dialog.open(BananaComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  peasPopup(){
    this.dialog.open(PeasComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  lemonPopup(){
    this.dialog.open(LemonComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }


  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }


}
