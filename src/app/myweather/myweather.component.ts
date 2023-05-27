import { Component, OnInit } from "@angular/core";

import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-myweather",
  templateUrl: "./myweather.component.html",
  styleUrls: ["./myweather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherData: any;

  constructor(

    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.retrieveWeatherData();
   
  }
  

  retrieveWeatherData() {
    this.apixuService.getWeather()
      .subscribe(
        data => {
          this.weatherData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  getUrl()
{
  return "url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/15/13/istock-671323338.jpg?width=1200')";}
  
}