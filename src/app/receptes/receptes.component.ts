import { Component, OnInit } from '@angular/core';
import { RECEPTES } from '../receptes';
import { COMENTARI } from '../comentari';

@Component({
  selector: 'app-receptes',
  templateUrl: './receptes.component.html',
  styleUrls: ['./receptes.component.css']
})
export class ReceptesComponent implements OnInit {

  constructor() { }
  
  comentari = COMENTARI;
  recep = RECEPTES;
  searchbar='';
  selec='';
  selector="";

  onChange(deviceValue){
    this.selec=deviceValue;
    alert(deviceValue);
  }

  ngOnInit(): void {
    this.selector = "Tria una de les opcions";
  }

}
