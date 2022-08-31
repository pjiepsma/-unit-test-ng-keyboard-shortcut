import {Component} from '@angular/core';
import {ShortcutEventOutput, ShortcutInput} from 'ng-keyboard-shortcuts';
import {ShortcutInput as HotkeyInput} from 'ng-hotkeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shortcuts: ShortcutInput[] = [];
  hotkeys: HotkeyInput[] = [];

  controlG = false;
  controlB = false;

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: 'cmd + g',
      command: (output: ShortcutEventOutput) => {
        console.log(output);
        this.controlG = true;
      },
      preventDefault: true,
    });
    this.hotkeys.push({
      key: 'cmd + b',
      command: (output: ShortcutEventOutput) => {
        console.log(output);
        this.controlB = true;
      },
      preventDefault: true,
    });
  }
}
