import { Component, OnInit } from '@angular/core';
import { WeatherData } from './modules/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Lisbon';
  weatherData?: WeatherData;

  ngOnInit(): void {

    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    console.log("***************************REQUEST***********")
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response);


        this.weatherData = response;
      }
    });
  }
}
