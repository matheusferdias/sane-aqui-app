import { Component } from '@angular/core';
import { PesquisaFormComponent } from './features/formulario-pesquisa/pesquisa-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PesquisaFormComponent],
  template: `<app-saneamento-form></app-saneamento-form>`
})
export class AppComponent {}
