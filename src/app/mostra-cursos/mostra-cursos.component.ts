import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostra-cursos',
  templateUrl: './mostra-cursos.component.html',
  styleUrls: ['./mostra-cursos.component.css']
})
export class MostraCursosComponent {

  @Input() curso;

}
