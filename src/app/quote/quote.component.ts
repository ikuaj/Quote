import { Component, OnInit } from '@angular/core';
import {quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class quoteComponent implements OnInit {

  quotes = [
      new quote(1,'Anonymous','Sometimes we dont have to know the reason why things happen, but just let things happen and trust them.',new Date(2018,3,14) ),
      new quote(2,'Anonymous','A wise man once said nothing.',new Date(2018,6,9) ),
      new quote(3, 'Anonymous','Never let your friends feel lonely! Disturb them at all time.',new Date(2018,1,12) ),
      new quote(4,'Avicii','life is a game for everyone but love is the price',new Date(2018,4,23))

  ]

    deletequote(isComplete,index){
        if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  addNewquote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}

    toogleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }

  constructor() { }
  ngOnInit() {
  }

}
