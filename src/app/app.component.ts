import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Souparno Bhattacharya'
  catcount=1
  addCat(){
    this.catcount+=1
  }
  
  
}
