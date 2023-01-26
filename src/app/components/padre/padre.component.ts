import { Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  @Input() estudiantesPadre!: Estudiante[];

  @Output()eventoSalidaPadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>;



  actualizarEstudiantesPadre(estudiante:Estudiante){
    console.log('estoy agregando un estudiante al padre ', estudiante);
    this.eventoSalidaPadre.emit(estudiante);
  }
}
