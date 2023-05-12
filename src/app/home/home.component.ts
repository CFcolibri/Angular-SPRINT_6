import { Component, Input } from '@angular/core';
import { HistoryItem } from '../Interface/history.interface';
import historiesData from '../../assets/histories.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public histories : HistoryItem[] = historiesData;//cridem el fitxer json es important afegir un parell de lineas a tsconfig.json
}
