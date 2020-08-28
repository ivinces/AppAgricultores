import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CultActivoPage } from './cult-activo.page';

describe('CultActivoPage', () => {
  let component: CultActivoPage;
  let fixture: ComponentFixture<CultActivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultActivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CultActivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
