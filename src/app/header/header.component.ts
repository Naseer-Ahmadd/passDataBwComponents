import { Component, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  
  
  // name: string = "";  
  constructor() { }
  //     messagelist = [{  
  //       id: 1,  
  //       msg: 'Test first notification'  
  //   }, {  
  //       id: 2,  
  //       msg: 'Test first notification'  
  //   }, ];  


    

  ngOnInit() {
  }


  addNewItem(value: string) {
    console.log(value);
    
    this.newItemEvent.emit(value);
  }
 
}
