import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: GameItem;

  constructor(private gameListService: GameListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activatedRoute.paramMap.subscribe(params=>{
      if(params.get('id') != null){
        this.game = this.gameListService.getGameItem(Number(params.get('id')));
      }
    });
  }

}
