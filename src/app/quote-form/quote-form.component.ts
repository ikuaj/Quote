import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class quoteFormComponent implements OnInit {
  newquote=new quote(0,"","",new Date());
  @Output() addquote=new EventEmitter<quote>();

  submitquote(){
    this.addquote.emit(this.newquote)
  }

  constructor() { }

  ngOnInit() {
  }

}
