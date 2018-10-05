import { Component, OnInit } from "@angular/core";
import { SheltersService } from "./shelter.service";
import { Shelters } from "./shelter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  product: any; //for getting
  pet: any; //for deleting???
  newPet: any; //for creating
  errors: any;

  constructor(private _shelterService: SheltersService) {
    this.product = new Shelters();
  }

  ngOnInit() { 
  }
}
