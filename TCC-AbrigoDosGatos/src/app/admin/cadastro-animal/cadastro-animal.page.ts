import { Component, OnInit } from '@angular/core';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.page.html',
  styleUrls: ['./cadastro-animal.page.scss'],
})
export class CadastroAnimalPage implements OnInit {

  constructor(private FormGatoService:FormGatoService, private router:Router) {}
    selectedImage!:File;
    
  // adicionando imgGato

  onImageSelect(event: any) {
    this.selectedImage = event.target.files[0];
  }

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
  get imgGato(){
    return this.FormGato.get('imgGato')!;
  }


  submit_formGato(form:any){
    console.log(this.selectedImage);
    console.log(form.value);

    if(form.valid){
    let dadosGato = new FormData();
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
    this.FormGatoService.insert(dadosGato).subscribe();
    this.router.navigate(['/home-admin']);
  }
  }

}
