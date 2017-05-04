import { Injectable, Inject } from '@angular/core';

@Injectable()
export class PlaylistsService {
  constructor(@Inject('PlaylistsData') playlistsData) {
      this.playlists = playlistsData == null ? this.playlists: playlistsData;
   }

  playlists = [
  
  ];

  getPlaylists(){
    return this.playlists;
  }

  savePlaylist(playlist){
    if (playlist.id){
      let index = this.playlists.findIndex((old_playlist) =>(
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index,1,playlist);
    }else{
      playlist.id = Date.now();
      this.playlists.push(playlist);
    }
  }

  createPlaylist(){
     var newPlaylist = {
        name: '',
        tracks: 0,
        color: "#0000FF",
        favourite: false
    };
    return Object.assign({}, newPlaylist);
  }

 
}
