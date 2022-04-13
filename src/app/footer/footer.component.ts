import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // @Input() messagelist: any[];
  items = [];
  constructor() { }
  ngOnInit() {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  

}

