import { Component, Input } from '@angular/core';
import { HistoryItem } from '../Interface/history.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input()//input per rebre del pare
  public historiesList: HistoryItem[] = [];
}
