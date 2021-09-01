import { Component, NgZone, OnInit } from '@angular/core';
import { WindowServiceService } from '../services/window-service.service';
import { MessageService } from './../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private broadcastChannel: BroadcastChannel;

  constructor(
    public messageService: MessageService,
    public windowService: WindowServiceService,
    private ngZone: NgZone) {
      // Refer to the blog post about setting this up in a BroadcastService:
      // https://blogs.aca-it.be/how-to-use-the-broadcastchannel-api-angular/
    this.broadcastChannel = new BroadcastChannel("broadcast-channel-name");
    this.broadcastChannel.onmessage = (message) => this.ngZone.run(() => messageService.add(message.data.payload));
  }

  ngOnInit(): void {
  }

  broadcastMessageViaWindowService() {
    this.windowService.post();
  }

  broadcastMessageViaBroadcastChannel() {
    let message = { type: "post", payload: "message from browser window: " + Date.now() };
    this.broadcastChannel.postMessage(message);
  }

  clearMessages() {
    this.messageService.clear();
  }

}
