import {Component, OnInit} from '@angular/core';
import {Photo} from '../../model/photo.model';
import {PhotoService} from '../../service/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos: Photo[] = [];

  constructor(
    private photosService: PhotoService
  ) {
    photosService.fetchPhotos().subscribe(
      (photos: Photo[]) => {
        this.photos = photos;
      }
    );
  }

  ngOnInit(): void {
  }

}
