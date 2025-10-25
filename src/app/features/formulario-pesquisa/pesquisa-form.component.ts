import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-saneamento-form',
  standalone: true,
  imports: [
    FormsModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './pesquisa-form.component.html',
  styleUrls: ['./pesquisa-form.component.css']
})
export class PesquisaFormComponent {
  model = {
    cpf: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    numeroMoradoresResidencia: 0,
    possuiSaneamento: '',
    possuiAguaTratada: ''
  };

  onSubmit() {
    console.log('Dados enviados:', this.model);
    alert('Formulário enviado com sucesso!');
  }
}
