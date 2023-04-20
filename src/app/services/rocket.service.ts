import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'http://localhost:3000/rockets';
let rockets: Array<RocketInterface> = [];

export interface RocketInterface {
  id: number;
  name: string;
  description: string;
  height: number;
  country: string;
  flickr_images: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private http: HttpClient) { }

  get() {
    return rockets.slice();
  }

  load() {
    return this.http.get<Array<RocketInterface>>(service);
  }

  add(rocket: RocketInterface) {
    rockets.push(rocket);
    this.http.post(service, rocket).subscribe();
    return this.get();
  }

  remove(rocketid: number) {
    this.http.delete(service+'/'+rocketid).subscribe();
    return this.get();
  }

  edit(rocketid: number) {
    return this.http.get<RocketInterface>(service+'/'+rocketid);
  }
  //Parcialmente implementada la opcion de editar. Carga los datos en el
  //componente "manage" usando el paso de datos por url tradicional. Ejemplo: http://localhost:4200/manage=id=1
}
