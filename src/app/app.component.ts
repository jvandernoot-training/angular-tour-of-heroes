import { Component, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  userName = 'TBD';

  constructor(private cookieService: CookieService, private messageService: MessageService) {}


  public ngOnInit(): void {
    let sessionUserName = this.cookieService.get('xxx-hero-user-session');
    if (sessionUserName) this.userName = sessionUserName;
  }

  @HostListener('document:messageReceiveEvent', ['$event'])
  onMessage(event: CustomEvent) {
    console.log("Received message from WPF...");
    console.log(event);
    this.messageService.add(event.detail);
  }
}
