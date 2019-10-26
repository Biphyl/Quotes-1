import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from "../quote";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quotes( "","","",new Date());
@Output() addQuote = new EventEmitter<Quotes>();
submitQuote(){
  this.addQuote.emit(this.newQuote);
}
  
  constructor() { }

  ngOnInit() {
  }
}

