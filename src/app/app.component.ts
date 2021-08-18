import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  userName = 'TBD';

  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
    let sessionUserName = this.cookieService.get('xxx-hero-user-session');
    if (sessionUserName) this.userName = sessionUserName;
  }
}
