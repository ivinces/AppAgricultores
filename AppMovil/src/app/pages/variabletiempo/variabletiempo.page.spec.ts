import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariabletiempoPage } from './variabletiempo.page';

describe('VariabletiempoPage', () => {
  let component: VariabletiempoPage;
  let fixture: ComponentFixture<VariabletiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariabletiempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariabletiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
