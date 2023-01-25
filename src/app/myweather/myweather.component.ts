import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
    this. retrieveWeatherData();
   
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
}