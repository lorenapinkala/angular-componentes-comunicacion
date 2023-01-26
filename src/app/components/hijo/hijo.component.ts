import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() estudiantesHijo!:Estudiante[];

  @Output()eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>;
  nombre!:string;
  curso!:string;
  activo:boolean=false
  notaMedia!:number;


  agregarEstudiante(){
    let estudiante: Estudiante={
      nombre:this.nombre,
      curso:this.curso,
      activo:this.activo,
      notaMedia:this.notaMedia
    }
    console.log('estoy agregando este estudiante',estudiante)
    this.eventoSalidaEstudiante.emit(estudiante);
  }

  

  
}
