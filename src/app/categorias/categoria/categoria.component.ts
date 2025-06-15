import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposrForm: FormGroup;

  constructor(private categoriaService: CategoriaService) { 
    this.camposrForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.camposrForm.markAllAsTouched();
    if(this.camposrForm.valid){
      this.categoriaService.salvar(this.camposrForm.value).subscribe({
        next: categoria => {
          this.camposrForm.reset()
        },
        error: erro => console.error('Ocorreu um erro', erro)
      });
    }
  }

  isCampoInvalido(campo: string) {
    return this.camposrForm.get(campo)?.invalid && this.camposrForm.get(campo)?.touched;
  }
}
