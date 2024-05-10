import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dropimage',
  standalone: true,
  imports: [],
  templateUrl: './dropimage.component.html',
  styleUrl: './dropimage.component.css',
})
export class DropimageComponent implements OnInit {
  ngOnInit(): void {}

  onFileDrop(event: any) {
    const files = event.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();

        image.src = reader.result?.toString()!;
        this.displayImage(image);
      };
      reader.readAsDataURL(file);
    }
  }

  displayImage(image: any) {
    const imageContainer = document.querySelector('.image-container');
    imageContainer?.appendChild(image);
  }
}
