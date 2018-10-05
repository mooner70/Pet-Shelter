import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SheltersService } from "../shelter.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newPet;
  errors;
  constructor(
    private _shelterService: SheltersService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.newPet = { title: "", description: "" };
    this.errors = {};
  }

  create() {
    let observable = this._shelterService.createPet(this.newPet);
    observable.subscribe(
      data => {
        console.log("New entry:", data);
        this.newPet = { name: "", type: "", description: "", skills: "" };
        this._router.navigate(["/"]);
      },
      err => {
        this.errors = err.error;
        console.log(this.errors);
      }
    );
  }
}
