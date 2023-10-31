import { Component, OnInit } from '@angular/core';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-gato',
  templateUrl: './editar-gato.page.html',
  styleUrls: ['./editar-gato.page.scss'],
})
export class EditarGatoPage implements OnInit {

  gatoSelecionado: any = [];

  selectedImage!:File;

  onImageSelect(event: any) {
    this.selectedImage = event.target.files[0];
  }
  

  constructor(private FormGatoService:FormGatoService, private router:Router) {
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
  get imgGato(){
    return this.FormEditGato.get('imgGato')!;
  }


submit_formEditGato(form:any){
  console.log(this.selectedImage);
  console.log(form.value);
  // console.log(this.gatoSelecionado.idGato)

  if(form.valid){
  let dadosGato = new FormData();
  // dadosGato.append('idGato', this.gatoSelecionado.idGato);
  dadosGato.append('imgGato', this.selectedImage);
  dadosGato.append('nome', form.value.nome);
  dadosGato.append('cor', form.value.cor);
  dadosGato.append('raca', form.value.raca);
  dadosGato.append('idade', form.value.idade);
  dadosGato.append('descricao', form.value.descricao);
  dadosGato.append('sexo', form.value.sexo);
  // dadosGato[0] = {
  //   nome: form.nome,
  //   cor: form.cor,
  //   raca: form.raca,
  //   idade: form.idade,
  //   descricao: form.descricao,
  //   sexo: form.sexo,
  //   imgGato: form.imgGato,
  // };
  console.log(dadosGato);
  this.FormGatoService.update(dadosGato);
  this.router.navigate(['/home-admin']);
}
}





}



