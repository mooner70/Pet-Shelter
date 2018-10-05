import { Component, OnInit } from "@angular/core";
import { SheltersService } from "../shelter.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PetsComponent } from "../pets/pets.component";
import { Shelters } from "../shelter";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  newPet: Shelters;


  constructor(
    private _shelterService: SheltersService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newPet = new Shelters();
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._shelterService.onePet(params.id).subscribe(
        (pet: Shelters) => {
          console.log(pet);
          this.newPet = pet;
          
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
  delete(id) {
    let observable = this._shelterService.deletePet(id);
    observable.subscribe( (data: Shelters) => {
      console.log("Deleted pet!", data);
      this.newPet = data;
      this._router.navigate(["/"]);

    });
  }
}
