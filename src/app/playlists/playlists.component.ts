import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import playlistsData from "./playlists.data";

@Component({
  selector: '.playlists, playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  providers:[
    { provide: PlaylistsService, useClass: PlaylistsService},
    { provide: 'PlaylistsData', useValue: playlistsData}
  ]
})
export class PlaylistsComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { 
  }

  ngOnInit() {
     this.playlists = this.playlistsService.getPlaylists();
  }

  selected = null;
  playlists = [];

  edited = {}
  mode = 0;
  size = 12;

  save(playlist){
    this.playlistsService.savePlaylist(playlist);
    
  }

  createNew(event){
    this.mode = 1;
    let newPlaylist = this.playlistsService.createPlaylist();
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }
  
  select(playlist){
    if (playlist != this.selected){
      this.mode = 2;
      this.selected= playlist;
    }
  }
  edit(playlist){
      this.mode = 1;
      this.edited =Object.assign({}, playlist);
      this.selected = playlist;  
  }
 

}
