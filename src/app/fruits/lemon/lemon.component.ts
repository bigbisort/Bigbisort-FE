import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-lemon',
  templateUrl:'./lemon.component.html',
  styleUrls:['./lemon.component.scss']
})
export class LemonComponent implements OnInit{

  constructor(private renderer: Renderer2, private el: ElementRef,public dialog: MatDialog) { }

  ngOnInit(): void {
    // Get the target element (e.g., a div with a class "popup-container
  }


  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }
}