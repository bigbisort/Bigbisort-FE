import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-papaya',
  templateUrl:'./papaya.component.html',
  styleUrls:['./papaya.component.scss']
})
export class PapayaComponent implements OnInit{

  constructor(private renderer: Renderer2, private el: ElementRef,public dialog: MatDialog) { }

  ngOnInit(): void {
    // Get the target element (e.g., a div with a class "popup-container
  }


  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }
}
