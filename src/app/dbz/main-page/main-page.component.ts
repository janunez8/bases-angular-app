import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbzz.interface';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo: Personaje = {nombre: "Maestro", poder: Infinity};

  constructor(){}
}
