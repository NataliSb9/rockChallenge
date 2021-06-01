import { Component, OnInit } from '@angular/core';
import { RockBand } from 'src/app/models/rock-band';
import { BandsService } from 'src/app/shared/bands.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing-rock-app',
  templateUrl: './landing-rock-app.component.html',
  styleUrls: ['./landing-rock-app.component.css']
})
export class LandingRockAppComponent implements OnInit {
  public bands: RockBand[];
  error: any;
  constructor(private bandsService: BandsService, private router: Router) {
    this.bands = [];
    this.error;
  }


  selectBand(band: RockBand) {

    this.bandsService.selectBand(band)
    this.router.navigate(["/", 'infoBand'])
  }

  findBand(nameBand: string): any {
    this.bandsService.findBands(nameBand).subscribe((data: any) => {
        this.bands = this.bandsService.turnIntoBand(data);
        console.log(this.bands)
      })
  }

  deleteBand(idBand: Number) {
    console.log("controlador: " + idBand)
    this.bandsService.removeBand(idBand).subscribe((data: any) => {
      this.ngOnInit();
    }, (error) => {
      console.log(error.error)
      this.error = error.error
    })
  }

  ngOnInit(): void {
    this.bandsService.getInfo().subscribe((data: any) => {
      this.bands = this.bandsService.turnIntoBand(data);
      console.log(this.bands)
    })
  }

}