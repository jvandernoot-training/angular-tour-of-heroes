import { Component, OnInit } from '@angular/core';
import { WindowServiceService } from '../services/window-service.service';
import { MessageService } from './../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, public windowService: WindowServiceService) { }

  ngOnInit(): void {
  }

  postMessage() {
    this.windowService.post();
  }

  clearMessages() {
    this.messageService.clear();
  }
}
