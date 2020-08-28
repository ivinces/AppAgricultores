import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CultInactivoPage } from './cult-inactivo.page';

describe('CultInactivoPage', () => {
  let component: CultInactivoPage;
  let fixture: ComponentFixture<CultInactivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultInactivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CultInactivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
