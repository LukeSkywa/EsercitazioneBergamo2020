import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[] = [];
  constructor(private gameListService: GameListService, private router: Router) {
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }

  showDetail(id: number) {
    this.router.navigateByUrl('/portale/detail/' + id);
  }

}
