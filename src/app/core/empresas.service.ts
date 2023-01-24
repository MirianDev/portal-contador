import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

constructor(private httpClient:HttpClient) { }
getAll(){
  return this.httpClient.get('http://localhost:3003/empresas')
}
}
