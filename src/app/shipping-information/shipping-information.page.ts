import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { cargo } from 'LogisticsBackend/src/entity/Cargo';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.page.html',
  styleUrls: ['./shipping-information.page.scss'],
})
export class ShippingInformationPage implements OnInit {
  cargos=[]

  constructor(private service: CargoService) { }

  ngOnInit() {
    this.service.getCargo()
    this.service.cargodetails.subscribe(cargo => {
      this.cargos = cargo
    })
  }

  onSubmit(){
    this.service.getCargo()
  }

}
