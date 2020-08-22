import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapatempPage } from './mapatemp.page';

describe('MapatempPage', () => {
  let component: MapatempPage;
  let fixture: ComponentFixture<MapatempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapatempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapatempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
