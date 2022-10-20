import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent implements OnInit {

  Imovel: any[] = [];
  Endereco: any = []
  Proprietario: any[] = []
  Proprietarios_remove: any[] = []
  roprietario_remove: any = []
  
  modal: boolean = false;

  constructor(private apiService: ApiService) {
    this.getImoveis()
    
  }

  ngOnInit(): void {
    
  }
  getImoveis(): void{
    this.apiService.getdadosDB("imovel").subscribe((dados) => {
      //console.log(dados);
      this.Imovel = dados;
      //console.log(this.Imovel);
    });
  }

  excluir(id: number){

    this.Imovel = this.Imovel.filter((item) => id !== item.id);
    this.apiService.removeDB(id).subscribe(); 
    
  }


}
