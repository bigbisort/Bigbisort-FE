import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-carrot',
  templateUrl:'./carrot.component.html',
  styleUrls:['./carrot.component.scss']
})
export class CarrotComponent implements OnInit{

  constructor(private renderer: Renderer2, private el: ElementRef,public dialog: MatDialog) { }

  ngOnInit(): void {
    // Get the target element (e.g., a div with a class "popup-container
  }


  closePopup() {
    this.dialog.closeAll(); // Function to close popup
  }
}
