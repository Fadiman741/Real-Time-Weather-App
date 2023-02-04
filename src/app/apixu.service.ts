import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  
  headers: HttpHeaders = new HttpHeaders;
  
  constructor(private http: HttpClient) { }
  getWeather(): Observable<any> {
    
    const httpOptions = {
      headers: this.headers
    };

    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Secure', 'false');


    return this.http.get('http://api.weatherstack.com/current?access_key=ab4f4438f9e08d9b9328d1a6799f9d2b&query=cape%20town',httpOptions);
  }
}