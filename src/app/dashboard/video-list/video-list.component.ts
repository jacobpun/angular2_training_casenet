import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../../common/interface'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  selectedVideo:Video;

  @Output() selectd:EventEmitter<Video> = new EventEmitter<Video>();

  @Input() videos:Video[];
  
  constructor() { }

  ngOnInit() {
  }

  pick(video: Video) {
    this.selectd.emit(video)
  }
}
