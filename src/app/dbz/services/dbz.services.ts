import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbzz.interface';


@Injectable()//Se ejecuta hasta que alguien lo requiera
export class DbzService{
    private _personajes: Personaje[] = [{nombre: "Goku", poder: 10000}, {nombre: "Krilin", poder: 100000}]; 

    get personajes(): Personaje[]{
        return [...this._personajes] //Copia lit para no cambiar los valores por referencia NO DEBE PODER MANIPULAR EL GET
    }

    agregarNuevoPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
    constructor(){
        console.log("Servicio inicializado");
    }
}