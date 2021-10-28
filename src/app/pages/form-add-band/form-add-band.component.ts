import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/shared/bands.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RockBand } from 'src/app/models/rock-band';



@Component({
  selector: 'app-form-add-band',
  templateUrl: './form-add-band.component.html',
  styleUrls: ['./form-add-band.component.css']
})
export class FormAddBandComponent implements OnInit {
  public formAddBand: FormGroup
  public response: string;
  constructor(private buildFormBand: FormBuilder, private infoBands: BandsService) {

    this.formAddBand = this.buildFormBand.group({
      nameBand: ["", Validators.required],
      yearBeginning: [0, Validators.required],
      foto: [""],
      video: [""],
      description: [""],
    })
    this.response = ""
  }

  sendBandToService() {
    if( this.createBandIfFilled().nameBand !== "" && 
      this.createBandIfFilled().yearBeginning !== 0 &&
      this.createBandIfFilled().foto !== "" && 
      this.createBandIfFilled().video !== "" &&
      this.createBandIfFilled().description!== ""){
        this.infoBands.addBand(this.createBandIfFilled()).subscribe((res: any) => {
          console.log(res)
        })
      } else {
        this.response = "Completa todo el formulario";
      }
   
  }

  createBandIfFilled(): any {
    let dataForm = this.formAddBand.value;
    let nameBand: string = dataForm.nameBand;
    let yearBeginning: number = dataForm.yearBeginning
    let foto: string = dataForm.foto;
    let video: string = dataForm.video;
    let description: string = dataForm.description;

    if (dataForm.nameBand !== "" &&
      dataForm.yearBeginning !== 0 &&
      dataForm.foto !== "" &&
      dataForm.video !== "" &&
      dataForm.description !== "") {
      let newBand = new RockBand(0, nameBand.toLowerCase(), yearBeginning, description, video, foto);
      return newBand
    } 

  }



  ngOnInit(): void {
  }

}
