import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempvstiempoPage } from './tempvstiempo.page';

describe('TempvstiempoPage', () => {
  let component: TempvstiempoPage;
  let fixture: ComponentFixture<TempvstiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempvstiempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempvstiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
