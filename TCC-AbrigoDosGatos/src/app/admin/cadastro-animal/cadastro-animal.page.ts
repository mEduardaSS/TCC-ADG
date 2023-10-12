import { Component, OnInit } from '@angular/core';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.page.html',
  styleUrls: ['./cadastro-animal.page.scss'],
})
export class CadastroAnimalPage implements OnInit {

  constructor(private FormGatoService:FormGatoService) { }

  FormGato!: FormGroup;

  ngOnInit() {
    this.createFormGato();
  }

  createFormGato(){
    this.FormGato = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      cor: new FormControl(''),
      raca: new FormControl(''),
      sexo: new FormControl(''),
      idade: new FormControl(''),
      descricao: new FormControl(''),
      imgGato: new FormControl(''),
    })
  }

  get nome(){
    return this.FormGato.get('nome')!;
  }
  get cor(){
    return this.FormGato.get('cor')!;
  }
  get raca(){
    return this.FormGato.get('raca')!;
  }
  get sexo(){
    return this.FormGato.get('sexo')!;
  }
  get idade(){
    return this.FormGato.get('idade')!;
  }
  get descricao(){
    return this.FormGato.get('descricao')!;
  }

onFileSelected(event: any) {
  const file: File = event.target.files[0];

  this.FormGato.patchValue({image: file});

}

  submit_formGato(form:any){
    console.log(form);
    let dadosGato = [];
    dadosGato[0] = {
      nome: form.nome,
      cor: form.cor,
      raca: form.raca,
      idade: form.idade,
      descricao: form.descricao,
      sexo: form.sexo,
      imgGato: form.imgGato,
    };
    console.log(this.FormGato.value);
    this.FormGatoService.insert(dadosGato[0]).subscribe();
  }

}
