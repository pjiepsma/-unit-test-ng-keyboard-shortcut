import { Component } from '@angular/core';
import { ShortcutEventOutput, ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shortcuts: ShortcutInput[] = [];
  controlF = false;

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: 'cmd + f',
      command: (output: ShortcutEventOutput) => {
        console.log(output);
        this.controlF = true;
      },
      preventDefault: true,
    });
  }
}
