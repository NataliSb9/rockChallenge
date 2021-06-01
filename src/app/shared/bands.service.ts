import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RockBand } from '../models/rock-band';


@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private urlBand: string = "http://localhost:3000/rockbands";
  private selectedBand: RockBand
  constructor(private http: HttpClient) {
    this.selectedBand = new RockBand(0,"",0,"","","")
  }
  getInfo():any{
    return this.http.get(this.urlBand)
  }

  findBands(name: string):any{
    console.log("hola" + name)
    return this.http.get(`${this.urlBand}?name=${name}`)
  }

  addBand(band:any){
    
    return this.http.post(this.urlBand, band)
  }

  editBand(band: RockBand){
    console.log('desde el servicio')

    console.log(band)
    return this.http.put(this.urlBand, band)
  }
  
  removeBand(idBand: Number) {
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        _id: idBand
      }
    }
    console.log("servicio: " + idBand)
    return this.http.delete(this.urlBand, options)
  }
  turnIntoBand(resp:any[]): RockBand[]{
    let bands: RockBand [] = []

    for(let i = 0; i<resp.length ; i++){
      let rockBand = new RockBand (resp[i]._id,resp[i].name,resp[i].yearBeginning, resp[i].description, resp[i].video, resp[i].foto)
      bands.push(rockBand)
    }
    return bands
  }
  selectBand(band: RockBand){
    this.selectedBand = band
  }

  getSelectedBand() : RockBand{
    return this.selectedBand
  }
  
  getIdVideo(): string{
    let idArr = this.selectedBand.video.split('=')
    let id = idArr[1].slice(0,-11)
    return id
  }

}
