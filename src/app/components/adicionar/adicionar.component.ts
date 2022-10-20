import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  creatHandler(Data: any){
    this.apiService.adicionarImovel(Data).subscribe();
    this.router.navigate(['/']);
  }
}
