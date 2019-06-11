import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../services/app.service.data";
//import {Sha1Service} from '../services/app.service.crypto';

@Component({
  moduleId: module.id,
  selector: "my-connexion",
  templateUrl: "app.connexion.html",
  styleUrls: ["app.connexion.css"]
})

export class ConnexionComponent {
  titre: string = "Connexion";
  lblLogin: string = "Login";
  lblMdp: string = "Mot de passe";
  login: string;
  mdp: string;
  estCache: boolean = true;
  lblMessage: string = "";
  visiteur: any;

  constructor(private router: Router, private dataService: DataService) {}

  valider(): void {
    this.dataService.connexion(this.login, this.mdp).subscribe(
      data => {
        this.visiteur = data;
        this.dataService.visiteur = data; // ajouté pour récupérer le visiteur dans la gestion des rapports
        this.router.navigate(["accueil"]);
      },
      error => {
        this.estCache = false;
        this.lblMessage = "erreur";
      }
    );
  }
}
