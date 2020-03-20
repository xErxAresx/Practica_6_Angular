import { Component, OnInit } from '@angular/core';
import { RECEPTES } from '../receptes';
import { Receptes } from '../receptes';

@Component({
  selector: 'app-receptes-formulari',
  templateUrl: './receptes-formulari.component.html',
  styleUrls: ['./receptes-formulari.component.css']
})
export class ReceptesFormulariComponent implements OnInit {

  constructor() { }

  recep = RECEPTES;
  id_time = Date.now();
  form_recep: Receptes = new Receptes;
  
  //He hagut de crear aquestes variables perque sino hem dona un error en la validació
  name;
  description_recepta;
  ingredients_recepta;
  
  crearRecepta(){

    this.form_recep.id = this.id_time;
    this.recep.push(this.form_recep);
    this.form_recep= new Receptes;
    
  }

  ngOnInit(): void {
  }

}
