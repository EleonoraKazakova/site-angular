import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentChoice: string ='0'
  fructs = ['Apples', 'Bananas', 'Peaches']
  choice = []
  constructor() { }

  number = 0
  ngOnInit(): void {
  }

  showChoice() {
    this.currentChoice = this.currentChoice
    this.number+=1
  }

}
