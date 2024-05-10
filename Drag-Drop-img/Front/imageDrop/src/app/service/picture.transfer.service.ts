import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PictureTransferService {
  constructor(private httpService: HttpClient) {}

  sendToBackEnd(file: File) {
    //file will be sent as form data
    const formData = new FormData();
    formData.append('file', file);

    return this.httpService.post(
      'http://localhost:8080/file/dropped',
      formData
    );
  }
}
