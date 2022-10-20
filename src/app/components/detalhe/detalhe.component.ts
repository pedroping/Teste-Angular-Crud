import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  Imovel: any[] = []
  Id: number = 0

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { 
    this.getImoveis();  
    this.Id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
  }

  getImoveis(): void{
    this.apiService.getdadosDB("imovel").subscribe((dados) => {
      this.Imovel = dados//.filter((item) => item.id === this.Id);
      console.log(this.Imovel);
  });
    
  }
}
