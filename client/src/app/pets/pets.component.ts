import { Component, OnInit } from '@angular/core';
import { SheltersService } from '../shelter.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets
  pet

  constructor(private _shelterService:SheltersService) {   }

  ngOnInit() {
    this.getPets();

  }
  getPets() {
    let observable = this._shelterService.getPets();
    observable.subscribe(data => {
      console.log("Got your data", data);
      this.pets = data;
    });
  }
  
}
