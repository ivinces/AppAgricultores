import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumivstiempoPage } from './humivstiempo.page';

describe('HumivstiempoPage', () => {
  let component: HumivstiempoPage;
  let fixture: ComponentFixture<HumivstiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumivstiempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumivstiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
