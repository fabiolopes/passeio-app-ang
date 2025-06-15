import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];
  avaliacoes = [
    {
      nome: 'Ruim',
      valor: 1
    },
    {
      nome: 'Regular',
      valor: 2
    },
    {
      nome: 'Bom',
      valor: 3
    },
    {
      nome: 'Muito  Bom',
      valor: 4
    },
    {
      nome: 'Excelente',
      valor: 5
    }
  ]


  constructor(
    private catagoriaService: CategoriaService,
    private lugarService: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
      avaliacao: new FormControl('', Validators.required)
    });
   }
  ngOnInit(): void {
    this.catagoriaService.obterTodas().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
        console.log(this.categorias);
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }

   salvar() {
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid) {
      this.lugarService.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log(lugar);
          this.camposForm.reset();
        },
        error: (erro) => {
          console.error(erro);
        }
      });
    }
   }

   isCampoInvalido(campo: string) {
      return this.camposForm.get(campo)?.invalid && this.camposForm.get(campo)?.touched;
   }

}
