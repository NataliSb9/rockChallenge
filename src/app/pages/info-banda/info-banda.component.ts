import { Component, OnInit } from '@angular/core';
import { RockBand } from 'src/app/models/rock-band';
import {BandsService} from 'src/app/shared/bands.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-info-banda',
  templateUrl: './info-banda.component.html',
  styleUrls: ['./info-banda.component.css']
})
export class InfoBandaComponent implements OnInit {
  public band : RockBand;
  public youtubeVideo : SafeResourceUrl;
  public id: string;
  public correctURL: string;
  constructor(private bandsService: BandsService, private sanitizer: DomSanitizer) {
    this.band = this.bandsService.getSelectedBand()
    this.id = this.bandsService.getIdVideo();
    this.correctURL = 'https://www.youtube.com/embed/' + this.id
    this.youtubeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.correctURL)
  }

  

  ngOnInit(): void {
  }

}
