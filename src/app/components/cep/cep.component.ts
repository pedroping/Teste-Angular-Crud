import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Cep } from 'src/app/CepElement';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  
  idCep: string = ''
  mostrar: boolean = false
  Cep: any = [];
  teste: any

  constructor(private cepService: CepService) {
  }

  ngOnInit(): void {
  }

  validarCep():void {
    this.mostrar = true;
  }
  
  getCep(idCep: string): void{
    this.Cep = [];
    this.cepService.buscaCep(idCep).subscribe((dados) => {
      this.Cep = dados;
      this.validarCep();
    })  
  }
}