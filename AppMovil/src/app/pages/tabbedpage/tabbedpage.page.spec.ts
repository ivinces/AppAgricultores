import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabbedpagePage } from './tabbedpage.page';

describe('TabbedpagePage', () => {
  let component: TabbedpagePage;
  let fixture: ComponentFixture<TabbedpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabbedpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
