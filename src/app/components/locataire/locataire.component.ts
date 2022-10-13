import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.scss']
})
export class LocataireComponent implements OnInit {
  @Input() locataire !: Locataire

  constructor(private locataireService : LocataireService,
    private router : Router) { }

    onDetail(){
      this.router.navigateByUrl(`locataires/${this.locataire.id}`)
    }

    onSupprimer(){}

  ngOnInit(): void {
  }

}
