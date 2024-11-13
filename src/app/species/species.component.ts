import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BrinjalComponent} from "../vegetable/brinjal/brinjal.component";
import {PepperComponent} from "./pepper/pepper.component";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {


  constructor(public dialog: MatDialog) {}


  pepperPopup() {
    this.dialog.open(PepperComponent, {
      width: '90vw', // Make it nearly full-screen
      height: '90vh',
      panelClass: 'custom-dialog', // Add custom dialog class for any extra styles
    });
  }

  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }

}
