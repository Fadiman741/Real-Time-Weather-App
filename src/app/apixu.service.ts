import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=ab4f4438f9e08d9b9328d1a6799f9d2b&query='+ location
    );
  }
}
