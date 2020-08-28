import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabbedcultivosPage } from './tabbedcultivos.page';

describe('TabbedcultivosPage', () => {
  let component: TabbedcultivosPage;
  let fixture: ComponentFixture<TabbedcultivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedcultivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabbedcultivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
