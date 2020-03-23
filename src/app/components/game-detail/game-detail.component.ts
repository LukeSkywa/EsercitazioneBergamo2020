import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: GameItem;

  constructor() { }

  ngOnInit(): void {
  }

}
