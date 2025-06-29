import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private  http: HttpClient) { }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(`${environment.apiUrl}/lugares`, lugar);
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${environment.apiUrl}/lugares`);
  }

  filtrar(nome: string, categoria: string): Observable<Lugar[]> {
    let params = new HttpParams();
    if (nome) {
      params = params.set('nome_like', nome);
    }
    if (categoria) {
      params = params.set('categoria', categoria);
    }
    return this.http.get<Lugar[]>(`${environment.apiUrl}/lugares`, {params});
  }
}
