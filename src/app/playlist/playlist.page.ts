import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonGrid, IonToolbar, IonRow, IonCol, IonInput, IonButton, IonIcon, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonGrid
  ]
})
export class PlaylistPage implements OnInit {

  @ViewChild('tabs') tabs: IonTabs;
  selected: string | undefined;
  progress = 42;

  tracklist = [
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
    {
      title: 'The New Sound',
      artist: 'Jane Remover'
    },
  ]


  setSelectedTab() {
    this.selected = this.tabs?.getSelected();
  }

  constructor() { }

  ngOnInit() {
    
  }

}
