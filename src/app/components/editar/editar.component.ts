import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute} from '@angular/router';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  Imovel: any[] = []
  Id: number = 0;
 
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.getImoveis();
    this.Id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
  
  }
  getImoveis(): void{
    this.apiService.getdadosDB("imovel").subscribe((dados) => {
      this.Imovel = dados//.filter((item) => item.id === this.Id);
      
    });
    console.log(this.Imovel);
  }
  
  editarHandler(Data: any){
    this.apiService.editarImovel(Data, this.Id).subscribe();
    this.router.navigate(['/']);
  }

}
