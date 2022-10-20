import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private Url = 'http://localhost:5875'
  constructor(private http: HttpClient) { }

  getdadosDB(imovel: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.Url}/${imovel}`)
  }

  removeDB(id: number){
    return this.http.delete<any>(`${this.Url}/imovel/${id}`);
  }

  adicionarImovel(Data: any){
    return this.http.post(`${this.Url}/imovel`,Data);
  }

  editarImovel(Data: any, Id: number){
    console.log(Data)
    return this.http.put<any>(`${this.Url}/imovel/${Id}`, Data);
  }

}
