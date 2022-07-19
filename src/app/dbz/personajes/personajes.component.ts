import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbzz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{
  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }
  //Inyeccion de dependencias - Inyectamos el servicio al componente
  constructor(public dbzService: DbzService){
    
  }
}
