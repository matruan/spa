import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
})
export class BusquedaComponent implements OnInit {
  termino: string;
  heroes: Heroe[] = [];
  heroe: Heroe;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params["term"];
      this.heroes = this._heroesService.buscarHeroes(params["term"]);
    });
  }

  verHeroe(heroe: Heroe) {
    this.router.navigate(["/heroe", heroe.nombre]);
  }
}
