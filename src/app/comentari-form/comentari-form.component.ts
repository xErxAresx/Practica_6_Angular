import { Component, OnInit } from '@angular/core';
import { COMENTARI } from '../comentari';
import { Comentari } from '../comentari';
import { RECEPTES } from '../receptes';

@Component({
  selector: 'app-comentari-form',
  templateUrl: './comentari-form.component.html',
  styleUrls: ['./comentari-form.component.css']
})

export class ComentariFormComponent implements OnInit {

  constructor() { }

  recep = RECEPTES;
  coment = COMENTARI;
  id_time = Date.now();
  form_coment: Comentari = new Comentari;

  hoy = new Date();
  dd = String(this.hoy.getDate()).padStart(2, '0');
  mm = String(this.hoy.getMonth() + 1).padStart(2, '0');
  yyyy = this.hoy.getFullYear();

  date = this.dd + '/' + this.mm + '/' + this.yyyy;


  crearComentari(){

    this.form_coment.id = this.id_time;
    this.form_coment.date = this.date;
    this.coment.push(this.form_coment);
    this.form_coment= new Comentari;

  }

  ngOnInit(): void {
  }

}
