import { Component } from '@angular/core';
//componente principal de la aplicacion
@Component({
  selector: 'app-root',//nombre del selector
  templateUrl: './app.component.html', //cual es template html
  styleUrl: './app.component.scss' //que archivo usa para los estilos
})
export class AppComponent {
  title: string = 'La Galletita Loca';
}
