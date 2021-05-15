import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Array<string> = ["Apple", "Banana", "mango", "pear"]
  fruits1: Array<string>=[]

  xyz(a: string) {
  
    this.fruits1.push(a)
    let i=this.fruits.indexOf(a)
    this.fruits.splice(i,1)
    //this.fruits = this.fruits.filter(item => item !== a)

  }
}
