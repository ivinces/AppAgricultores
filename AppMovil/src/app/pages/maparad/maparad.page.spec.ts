import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaparadPage } from './maparad.page';

describe('MaparadPage', () => {
  let component: MaparadPage;
  let fixture: ComponentFixture<MaparadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaparadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaparadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
