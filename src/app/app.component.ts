import { Component } from '@angular/core';
import { Estudiante} from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes:Estudiante[]=[
    {nombre:'Goku', curso:'educacion fisica',activo:true,notaMedia:10},
    {nombre:'Vegeta', curso:'lengua y literatura',activo:true,notaMedia:7},
    {nombre:'Trunks', curso:'matematicas',activo:true,notaMedia:8},
    {nombre:'Gohan', curso:'ciencias',activo:true,notaMedia:10}
  ];


  agregarEstudiante(estudiante:Estudiante){
    this.estudiantes.push(estudiante);
    console.log('esto es lo que recibe el root', estudiante);
  }
}
