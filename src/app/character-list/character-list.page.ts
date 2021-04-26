import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {
  character = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res) => {
        this.character = res.results;
      });
  }
}
