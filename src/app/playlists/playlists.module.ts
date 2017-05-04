import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaylistsComponent } from './playlists.component';
import { CotentCardComponent } from './cotent-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from './playlists.service';

import playlistsData from "./playlists.data"

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlaylistsComponent,
    CotentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers:[
    { provide: PlaylistsService, useClass: PlaylistsService},
    { provide: 'PlaylistsData', useValue: playlistsData}
  ]
})
export class PlaylistsModule { }
