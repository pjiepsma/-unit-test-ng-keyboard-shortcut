import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {KeyboardShortcutsModule} from "ng-keyboard-shortcuts";
import {HotKeysModule} from "ng-hotkeys";
import {ngMocks} from 'ng-mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  ngMocks.faster();

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardShortcutsModule, HotKeysModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    await createComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should show control log on key combination "ctrl b" ng-hotkeys', async () => {
    const keyCtrlB = new KeyboardEvent('keydown', {
      key: 'b',
      ctrlKey: true,
    });

    await fixture.whenStable();

    document.dispatchEvent(keyCtrlB);
    expect(component.controlB).toBeTruthy();
  });

  it('Should show control log on key combination "ctrl g" ng-keyboard-shotcuts', async () => {
    const keyCtrlG = new KeyboardEvent('keydown', {
      key: 'g',
      ctrlKey: true,
    });

    await fixture.whenStable();

    document.dispatchEvent(keyCtrlG);
    expect(component.controlG).toBeTruthy();
  });

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  }
});
