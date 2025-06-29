import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${environment.apiUrl}/categorias`, categoria);
  }

  obterTodas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiUrl}/categorias`);
  }
}
