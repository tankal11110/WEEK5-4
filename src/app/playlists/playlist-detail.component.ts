import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-detail',
  template: `
      <p>Wybrana playlista</p>
      <div class="form-group">
          <button 
          class="btn btn-default float-xs-right" 
          (click) = "edit(playlist); mode=1">Edytuj</button>
      </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('editPlaylist')
  onEdit = new EventEmitter();

  edit(playlist){
    this.onEdit.emit(playlist);
  }

  constructor() { }
  ngOnInit() {
  }

}
