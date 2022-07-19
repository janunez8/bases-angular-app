import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbzz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  @Input() nuevo: Personaje = {nombre: '', poder: 0};

  //Inyeccion de dependencias - Inyectamos el servicio al componente
  constructor(public dbzService: DbzService){}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    console.log(this.nuevo);

    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
  
  

}
