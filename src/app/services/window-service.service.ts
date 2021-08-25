import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WindowServiceService {

  private _window: any;

  constructor(private messageService: MessageService) { 
    this._window = window;
  }

  post() {
    var item = this._window['CefSharp'];
    if(item) {
      const message = "Message from Angular";
      this.messageService.add("Sending message to hosting app: " + message);
      item.PostMessage({ "Message": message, });
    } else {
      this.messageService.add('CefSharp not found.');
    }
  }
}
