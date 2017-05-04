import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <table class="table table-striped"> 
        <thead> 
            <tr> 
                <th>#</th> 
                <th>Title</th> 
                <th>Tracks</th> 
                <th>Favourite</th> 
                <th>Delete</th> 
            </tr> 
        </thead> 
        <tbody> 

            <tr *ngFor = "let playlist of playlists; let i=index"
             class="playlist-row" [ngClass]="{ 'active': selected == playlist}" 
             [ngStyle]="{ borderBottomColor: playlist.color }" 
             (click)="select(playlist); mode=2"> 
                <th scope="row">{{i+1}}</th> 
                <td>{{playlist.name}}</td> 
                <td>{{playlist.tracks}}</td> 
                <td>
                    <input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation();"> 
                </td>
                <td><button class="btn btn-danger" (click)= "delete(playlist)">&times; </button></td>
            </tr> 
        </tbody> 
    </table>
  `,
  styles: [`
    .playlist-row{
        border-bottom: 2px solid transparent;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter();

  @Output('deleted')
  onDelete = new EventEmitter();

  @Input()
  playlists;

  @Input()
  selected;

  select(playlist){
      this.onSelected.emit(playlist);
  }

  delete(playlist){
    console.log(this.onDelete);
    this.onDelete.emit(playlist);
  }
  constructor() { }

  ngOnInit() {
  }

}
