import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SheltersService {
  pets;
  constructor(private _http: HttpClient) {
    this.pets = this.getPets();
  }

  getPets() {
    // let tempObservable = this._http.get("/tasks");
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/servpets");
  }
  createPet(newPet) {
    return this._http.post("/servpets/new", newPet);
    // let data = create;
    // let tempObservable = this._http.post("/tasks", data);
    // tempObservable.subscribe(data => console.log("Created task!", data));
  }
  onePet(id) {
    return this._http.get("/servpets/" + id);
  }
  deletePet(id) {
    console.log(id);
    return this._http.delete("/servpets/" + id);
    // let tempObservable = this._http.delete("/tasks/" + id);
    // tempObservable.subscribe(data => console.log("Deleted task!", data));
  }
  updatePet(data) {
    console.log(data);
    return this._http.patch("/servpets/" + data._id + "/edit", data);
    // let tempObservable = this._http.patch("/servpets/" + id + "/edit", data);
    // tempObservable.subscribe(data => console.log("Updated pet!", data));
  }
}
