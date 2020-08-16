import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UmbralesPage } from './umbrales.page';

describe('UmbralesPage', () => {
  let component: UmbralesPage;
  let fixture: ComponentFixture<UmbralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UmbralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
