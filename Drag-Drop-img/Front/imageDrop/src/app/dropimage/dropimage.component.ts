import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { PictureTransferService } from '../service/picture.transfer.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dropimage',
  standalone: true,
  imports: [],
  templateUrl: './dropimage.component.html',
  styleUrl: './dropimage.component.css',
})
export class DropimageComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}

  constructor(private pictureTransferService: PictureTransferService) {}

  onFileDrop(event: any) {
    const files = event.target.files;

    console.log(files);
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();

        image.src = reader.result?.toString()!;
        this.displayImage(image);
      };

      this.pictureTransferService.sendToBackEnd(file).subscribe({
        next: (n) => console.log(n),
        error: (e) => console.log(e),
      });
      reader.readAsDataURL(file);
    }
  }

  displayImage(image: any) {
    const imageContainer = document.querySelector('.image-container');
    imageContainer?.appendChild(image);
  }

  ngOnDestroy(): void {}
}
