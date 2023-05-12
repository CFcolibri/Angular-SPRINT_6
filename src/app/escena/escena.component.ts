import { Component, Input } from '@angular/core';
import { HistoryItem } from '../Interface/history.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input()//input per rebre del
  public historiesList: HistoryItem[] = [];
  public currentSentence = 0;

  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
  }

  next() {
    if (this.currentSentence < this.historiesList.length - 1) {
      this.currentSentence++;
    }
  }

  isCurrentSentence(index: number) {
    return index === this.currentSentence;
  }

}

