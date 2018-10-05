import { Component, OnInit } from "@angular/core";
import { SheltersService } from "../shelter.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetsComponent } from "../pets/pets.component";
import { Shelters } from "../shelter";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  newPet: Shelters;
  errors;

  constructor(
    private _shelterService: SheltersService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newPet = new Shelters();
    this.errors = [];
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._shelterService.onePet(params.id).subscribe(
        (pet: Shelters) => {
          this.newPet = pet;
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
  update() {
    let observable = this._shelterService.updatePet(this.newPet);
    observable.subscribe(
      data => {
        console.log("Updated pet!", data);
        this._router.navigate(["/"]);
      },
      err => {
        this.errors = err.error;
        console.log(this.errors);
      }
    );
  }
}
