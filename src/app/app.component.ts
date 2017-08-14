import { Component } from '@angular/core';

import { MdDialog } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';

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

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
