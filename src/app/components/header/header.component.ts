import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  OnAccueil(){
    this.router.navigateByUrl("accueil");
  }
  OnLocataires(){
    this.router.navigateByUrl("locataires");
  }
  OnVehicules(){
    this.router.navigateByUrl("vehicules");
  }
  OnLocations(){
    this.router.navigateByUrl("locations");
  }

}
