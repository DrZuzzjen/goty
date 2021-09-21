import { Component, OnInit } from '@angular/core';

import { Game, VotoJuego } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] =[]

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
    .subscribe(juegos => {
      this.juegos = juegos
      console.log(juegos)
    })
  }

  votarJuego(juego:Game){
    this.gameService.votarJuego(juego.id)
    .subscribe((resp:VotoJuego )=> {
      if(resp.ok){
        Swal.fire('Gracias', resp.mensaje, 'success')
      }
    })

  }

}
