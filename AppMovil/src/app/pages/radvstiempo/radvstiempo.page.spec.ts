import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadvstiempoPage } from './radvstiempo.page';

describe('RadvstiempoPage', () => {
  let component: RadvstiempoPage;
  let fixture: ComponentFixture<RadvstiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadvstiempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadvstiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
