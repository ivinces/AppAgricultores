import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapahumPage } from './mapahum.page';

describe('MapahumPage', () => {
  let component: MapahumPage;
  let fixture: ComponentFixture<MapahumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapahumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapahumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
