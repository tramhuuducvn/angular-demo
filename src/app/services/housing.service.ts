import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly URL = 'http://localhost:3000/locations';
  housingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList;
  }

  /**
   * Get all housing locations
   * @returns all housing location
   */
  public async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.URL);
    return (await data.json()) ?? [];
  }

  public async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.URL}/${id}`);
    return (await data.json()) ?? undefined;
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
