import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  curso = 'Analise de Sistemas';

  cursos = [
    {nome: "Análise de Sistemas"},
    {nome: "Eventos"},
    {nome: "Gestão de RH"}
  ]
}
