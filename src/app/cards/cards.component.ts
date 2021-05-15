import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() info:string=""
  @Output() clickedElement: EventEmitter<string> = new EventEmitter<string>()



  constructor() { }

  ngOnInit(): void {
  }
  
  elementClick() {
    this.clickedElement.emit(this.info)
  }

}
