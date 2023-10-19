import { Component, OnInit } from '@angular/core';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-gato',
  templateUrl: './editar-gato.page.html',
  styleUrls: ['./editar-gato.page.scss'],
})
export class EditarGatoPage implements OnInit {

  gatoSelecionado: any = [];

  constructor(private FormGatoService:FormGatoService) {
    this.gatoSelecionado = this.FormGatoService.gatoSelecionado;
   }

  ngOnInit() {
    console.log(this.gatoSelecionado);
    this.createFormEditGato();
  }

  indiceList: any;
  listar(indice: any) {
    this.FormGatoService.select().subscribe();
    // console.log(indice);
  }

  indiceDel: any;
  apagar(indice: any) {
    this.FormGatoService.delete(indice).subscribe();
    // console.log(indice);
  }


// form edit gatito

FormEditGato!: FormGroup;


  createFormEditGato(){
    this.FormEditGato = new FormGroup({
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
    return this.FormEditGato.get('nome')!;
  }
  get cor(){
    return this.FormEditGato.get('cor')!;
  }
  get raca(){
    return this.FormEditGato.get('raca')!;
  }
  get sexo(){
    return this.FormEditGato.get('sexo')!;
  }
  get idade(){
    return this.FormEditGato.get('idade')!;
  }
  get descricao(){
    return this.FormEditGato.get('descricao')!;
  }

onFileSelected(event: any) {
  const file: File = event.target.files[0];

  this.FormEditGato.patchValue({image: file});

}

  submit_formEditGato(form:any){
    console.log(form);
    let dadosGato = [];
    dadosGato[0] = {
      idGato: this.gatoSelecionado.idGato,
      nome: form.nome,
      cor: form.cor,
      raca: form.raca,
      idade: form.idade,
      descricao: form.descricao,
      sexo: form.sexo,
      imgGato: form.imgGato,
    };
    console.log(this.FormEditGato.value);
    this.FormGatoService.update(dadosGato[0]).subscribe();
  }





}



