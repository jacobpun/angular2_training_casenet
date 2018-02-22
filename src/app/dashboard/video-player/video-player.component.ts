import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../common/interface'
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() selectedVideo:Video;
  constructor() { }

  ngOnInit() {
  }

  getVideoUri() {
    return "http://www.youtube.com/embed/" + this.selectedVideo.id;
  }
}
