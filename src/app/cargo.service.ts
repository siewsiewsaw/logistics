import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  cargodetails = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getCargo(){
    this.http.get("http://localhost:3000/cargo").subscribe((cargodetails) => {
      this.cargodetails.next(cargodetails)
    })
  }

}
