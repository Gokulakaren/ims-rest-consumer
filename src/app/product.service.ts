import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//service layer which interacts with REST API

/**
 * Angular makes use of observables as an interface to handle a variety of common
 * asynchronous operations.
 * You can define custom events that send observable output data from a child to a parent component.
The HTTP module uses observables to handle AJAX requests and responses.
The Router and Forms modules use observables to listen for and respond to user-input events.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8085/ims/api/products';

  constructor(private http:HttpClient) { }

  getProductsList():Observable<any> {

    //invokes SpringBoot Rest API
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id:number):Observable<any> {

    //invokes SpringBoot Rest API
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  newProduct(product:Object):Observable<Object> {

    //invokes SpringBoot Rest API
    return this.http.get(`${this.baseUrl}`,product);
  }

  UpdateProduct(id:number,value:any):Observable<Object> {

    //invokes SpringBoot Rest API
    return this.http.get(`${this.baseUrl}/${id}`,value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}