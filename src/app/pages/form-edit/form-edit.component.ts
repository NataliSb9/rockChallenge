import { Component, OnInit } from '@angular/core';
import {BandsService} from 'src/app/shared/bands.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { RockBand } from 'src/app/models/rock-band';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  public formEditBand: FormGroup;
  public band: RockBand;
  public editedBand: RockBand;
  public response: string;
 
  constructor(private buildFormBand: FormBuilder, private infoBands: BandsService ) {
    this.band = this.infoBands.getSelectedBand();
    this.formEditBand = this.buildFormBand.group({
      nameBand:"",
      yearBeginning: 0,
      foto: "",
      video: "",
      description: "",
    })
    this.editedBand = new RockBand(0,"",0,"","","")
    this.response =""
    console.log(this.band.name)
   }

   editBand(){
    let dataForm = this.formEditBand.value;
    let id = this.infoBands.getSelectedBand()._id
    let nameBand = dataForm.nameBand;
    let yearBeginning = dataForm.yearBeginning;
    let foto = dataForm.foto;
    let video = dataForm.video;
    let description = dataForm.description;

    let editedBand =  new RockBand(id,nameBand.toLowerCase(),yearBeginning,description,video,foto);

    this.infoBands.editBand(editedBand).subscribe((res: any)=>{
      this.editedBand = editedBand;
      if(res._id !== 0){
        this.response = "Tus cambios se han guardado"
      }
    })
   }

  ngOnInit(): void {
  }

}
