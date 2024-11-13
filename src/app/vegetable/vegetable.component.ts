import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BrinjalComponent} from "./brinjal/brinjal.component";
import {CucumberComponent} from "./cucumber/cucumber.component";
import {DrumStickComponent} from "./drum-stick/drum-stick.component";
import {CauliFlowerComponent} from "./cauli-flower/cauli-flower.component";
import {CarrotComponent} from "./carrot/carrot.component";
import {CabbageComponent} from "./cabbage/cabbage.component";
import {ChilliComponent} from "./chilli/chilli.component";
import {CoconutComponent} from "./coconut/coconut.component";

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent {


  constructor(public dialog: MatDialog) {}


  brinjalPopup() {
    this.dialog.open(BrinjalComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  cucumberPopup() {
    this.dialog.open(CucumberComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  drumStickPopup() {
    this.dialog.open(DrumStickComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  cauliflowerPopup() {
    this.dialog.open(CauliFlowerComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  carrotPopup() {
    this.dialog.open(CarrotComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  cabbagePopup() {
    this.dialog.open(CabbageComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  chilliPopup() {
    this.dialog.open(ChilliComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }
  coconutPopup() {
    this.dialog.open(CoconutComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }


  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }

}
