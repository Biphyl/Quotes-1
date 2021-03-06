
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from "../quote";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote :Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Output () voteIncrease = new EventEmitter<boolean>();
  @Output () voteDecrease = new EventEmitter<boolean> ();
   ifIncrease(one:boolean){
     this.voteIncrease.emit(one);

   }
   ifDecrease(two:boolean) {
     this.voteDecrease.emit(two);
   }
quoteDan(purge:boolean){
  this.isComplete.emit(purge);
}
 
  constructor() { }

  ngOnInit() {
  }

}
