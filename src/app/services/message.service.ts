import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    let length = this.messages.length;
    this.messages.push(length + ": " + message);
  }

  clear() {
    this.messages = [];
  }
}
