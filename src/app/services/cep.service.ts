import { Injectable } from '@angular/core';
import { Cep } from '../CepElement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private Url = "https://viacep.com.br/ws/"
  constructor(private http: HttpClient) { }

  buscaCep(idCep: string): Observable<any>{
    return this.http.get<any>(`https://viacep.com.br/ws/${idCep}/json/`);
  }
}
