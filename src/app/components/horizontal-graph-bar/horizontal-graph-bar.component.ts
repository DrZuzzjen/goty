import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-horizontal-graph-bar',
  templateUrl: './horizontal-graph-bar.component.html',
  styleUrls: ['./horizontal-graph-bar.component.css']
})
export class HorizontalGraphBarComponent implements OnDestroy, OnInit {
  
  results: Game[] =[]
  score: number[] = []

/*   view: [number, number]  = [700, 400]; */

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo: any;

  constructor(private gameService: GameService) {
  
  }

  ngOnInit() {
    this.gameService.getNominados()
    .subscribe(data => {
      this.results = data
      this.score = data.map((juego) => juego.votos);
      console.log('esto es ' ,this.results)
      console.log('ALGOOO')
     
      })
    
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo)
  }
}
