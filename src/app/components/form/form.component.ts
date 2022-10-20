import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
}) 

export class FormComponent implements OnInit {

  @Input() imovelData: any | null = null
  @Output() onSubmit = new EventEmitter<any>()

  imovelForm!: FormGroup

  constructor() { 
    
  }

  ngOnInit(): void {
  if(this.imovelData){
    this.imovelForm = new FormGroup({
      cep: new FormControl(this.imovelData.cep),
      nome: new FormControl(this.imovelData.nome),
      banheiros: new FormControl(this.imovelData.banheiros),
      tipos: new FormControl(this.imovelData.tipos),
      valor: new FormControl(this.imovelData.valor),
      condominio: new FormControl(this.imovelData.condominio),
      quartos: new FormControl(this.imovelData.quartos),
      mobiliado: new FormControl(this.imovelData.mobiliado),
      area: new FormControl(this.imovelData.area),
      venda: new FormControl(this.imovelData.venda),
      aluguel: new FormControl(this.imovelData.aluguel),
      dataAnuncio: new FormControl(this.imovelData.dataAnuncio),
      rua: new FormControl(this.imovelData.rua),
      numero: new FormControl(this.imovelData.numero),
      bairro: new FormControl(this.imovelData.bairro),
      cidade: new FormControl(this.imovelData.cidade),
      uf: new FormControl(this.imovelData.uf),
      proprietarioId: new FormControl(this.imovelData.proprietarioId),
    })

  }else{
    this.imovelForm = new FormGroup({
      cep: new FormControl(''),
      nome: new FormControl(''),
      banheiros: new FormControl(''),
      tipos: new FormControl(''),
      valor: new FormControl(''),
      condominio: new FormControl(''),
      quartos: new FormControl(''),
      mobiliado: new FormControl(''),
      area: new FormControl(''),
      venda: new FormControl(''),
      aluguel: new FormControl(''),
      dataAnuncio: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      uf: new FormControl(''),
      proprietarioId: new FormControl(''),
    })
  }
   
  }

  submit(){
    //console.log(this.imovelForm.value)
    this.onSubmit.emit(this.imovelForm.value);
  }
}
