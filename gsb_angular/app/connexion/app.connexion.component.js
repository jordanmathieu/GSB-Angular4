"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_data_1 = require("../services/app.service.data");
//import {Sha1Service} from '../services/app.service.crypto';
var ConnexionComponent = /** @class */ (function () {
    function ConnexionComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.titre = "Connexion";
        this.lblLogin = "Login";
        this.lblMdp = "Mot de passe";
        this.estCache = true;
        this.lblMessage = "";
    }
    ConnexionComponent.prototype.valider = function () {
        var _this = this;
        this.dataService.connexion(this.login, this.mdp).subscribe(function (data) {
            _this.visiteur = data;
            _this.dataService.visiteur = data; // ajouté pour récupérer le visiteur dans la gestion des rapports
            _this.router.navigate(["accueil"]);
        }, function (error) {
            _this.estCache = false;
            _this.lblMessage = "erreur";
        });
    };
    ConnexionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-connexion",
            templateUrl: "app.connexion.html",
            styleUrls: ["app.connexion.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, app_service_data_1.DataService])
    ], ConnexionComponent);
    return ConnexionComponent;
}());
exports.ConnexionComponent = ConnexionComponent;
//# sourceMappingURL=app.connexion.component.js.map