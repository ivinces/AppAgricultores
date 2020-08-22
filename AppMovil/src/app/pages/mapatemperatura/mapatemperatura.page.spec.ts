import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapatemperaturaPage } from './mapatemperatura.page';

describe('MapatemperaturaPage', () => {
  let component: MapatemperaturaPage;
  let fixture: ComponentFixture<MapatemperaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapatemperaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapatemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
