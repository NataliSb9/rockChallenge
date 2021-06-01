import { Component, OnInit } from '@angular/core';
import {BandsService} from 'src/app/shared/bands.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { RockBand } from 'src/app/models/rock-band';



@Component({
  selector: 'app-form-add-band',
  templateUrl: './form-add-band.component.html',
  styleUrls: ['./form-add-band.component.css']
})
export class FormAddBandComponent implements OnInit {
   public formAddBand: FormGroup
   public response: string; 
  constructor(private buildFormBand: FormBuilder, private infoBands: BandsService ) {
    this.formAddBand = this.buildFormBand.group({
      nameBand:"",
      yearBeginning: 0,
      foto: "",
      video: "",
      description: "",
    })
    this.response=""
  }

  createBand(){
    let dataForm = this.formAddBand.value;
    let nameBand = dataForm.nameBand;
    let yearBeginning = dataForm.yearBeginning;
    let foto = dataForm.foto;
    let video = dataForm.video;
    let description = dataForm.description;

    let newBand =  new RockBand(0,nameBand.toLowerCase(),yearBeginning,description,video,foto);
    console.log(newBand)
    this.infoBands.addBand(newBand).subscribe((res:any)=>{
      console.log(res)
      if(res._id !== 0){
        this.response = "Tu banda ha sido añadida"
      }
    })
  }

  ngOnInit(): void {
  }

}
