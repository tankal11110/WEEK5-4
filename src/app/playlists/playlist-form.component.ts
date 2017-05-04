import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
      <div  class="thumbnail">
          <div class="form-group">
              <label>Name:</label>
              <input type="text" [(ngModel)]="playlist.name" class="form-control">
          </div>

          <div class="form-group">
              <label>Tracks:</label>
              <input type="number" [value]="playlist.tracks" class="form-control">
          </div>
        
          <div class="form-group">
              <label>Kolor:</label>
              <input type="color" [(ngModel)]="playlist.color" class="form-control">
          </div>

          <div class="form-group">
              <label>
              <input type="checkbox" [(ngModel)]="playlist.favourite">
              Favourite</label>
          </div>

          <div class="form-group">
              <button class="btn btn-success float-xs-right" (click) = "save(playlist)">Save</button>
          </div>
      </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {
  
  @Input()
  playlist;

  @Output('saved')
  onSaved = new EventEmitter();

  save(playlist){
    this.onSaved.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
