import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//Service
import { SheltersService } from "./shelter.service";

//Component
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent, PetsComponent, NewComponent, EditComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [SheltersService],
  bootstrap: [AppComponent]

})
export class AppModule {}
