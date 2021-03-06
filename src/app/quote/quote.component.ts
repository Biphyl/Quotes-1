
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quotes[] = [
    new Quotes("Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.", "Norman Vincent Peale", "Owino Lawrence", new Date(1980, 2, 14)),
    new Quotes("Press forward. Do not stop do not linger in your journey but strive for the mark set before you.", "George Whitefield", "Paul Cheche", new Date(1880, 7, 21)),

    new Quotes("Don’t watch the clock; do what it does. Keep going.", "Sam Levenson", "Seth Rollens", new Date(1990, 6, 19))
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  addVote(quote, index) {
    if (quote) {
      this.quotes[index].upvote += 1;
    }
  }
  lessVote(quote, index) {
    if (quote) {
      this.quotes[index].downvote += 1
    }
  }
  initNum: number
  finNum: number
  counter: number

  mostLiked() {
    this.initNum = 0
    this.finNum = 0
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.finNum = this.quotes[this.counter].upvote;

      if (this.finNum > this.initNum) {
        this.initNum = this.finNum
      }



    }

    return this.initNum;
  }
  constructor() { }

  ngOnInit() {
  }

}
