import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text = `This is a text paragraph.
    It is just here to fill up some space.
    Bla bla bla Yada yada yada.
    And repeat.`;
}
