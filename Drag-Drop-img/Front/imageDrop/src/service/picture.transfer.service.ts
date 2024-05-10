import { HttpClient } from '@angular/common/http';

export class PictureTransfer {
  constructor(private httpService: HttpClient) {}

  sendToBackEnd() {
    this.httpService.post('', null);
  }
}
