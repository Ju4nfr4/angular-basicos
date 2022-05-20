import { Component, NgModule } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    //Propiedades de la clase
    nombre: string = 'Ironman';
    edad  : number = 35;

    //Crear una propiedad que va a ser utilizadad cuando se llame
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    get nombreMinusculas(): string{
        return this.nombre.toLowerCase();
    }


    obtenerNombre(): string{

        return `${this.nombre} - ${this.edad}`;  //contruir un template literal
    }

    //Método cambiar nombre
    cambiarNombre():void{
        this.nombre = 'Spidermar';
    }

    //Método cambiar edad
    cambiarEdad():void{
        this.edad = 22;
    }


}



