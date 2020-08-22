import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapatabPage } from './mapatab.page';

describe('MapatabPage', () => {
  let component: MapatabPage;
  let fixture: ComponentFixture<MapatabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapatabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapatabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
