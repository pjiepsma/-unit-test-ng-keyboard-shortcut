import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeAll(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should show control log on key combination "ctrl b"', () => {
    const keyCtrlB = new KeyboardEvent('keydown', {
      key: 'b',
      ctrlKey: true,
      shiftKey: false,
    });

    document.dispatchEvent(keyCtrlB);
    expect(component.controlF).toBeTruthy();
  });
});
