import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaprincipalPage } from './mapaprincipal.page';

describe('MapaprincipalPage', () => {
  let component: MapaprincipalPage;
  let fixture: ComponentFixture<MapaprincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaprincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
