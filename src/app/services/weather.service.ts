import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { WeatherData } from '../modules/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue),

      params: new HttpParams()
        .set('location', cityName)
        .set('format', 'json')
        .set('u', 'c')
    })
  }
}
