import { Component, OnInit } from '@angular/core';
import { Video } from '../../common/interface'
import { VideoService } from '../../common/video.service'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoList:Observable<Video[]>;

  selectedVideo:any;
  constructor(private videoService:VideoService) {
  }
  
  ngOnInit() {
    this.videoList = this.videoService.load()
  }

  videoSelected(event: Event) {
    this.selectedVideo = event;   
  }
}