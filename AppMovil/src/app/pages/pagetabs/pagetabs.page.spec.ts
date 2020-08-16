import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagetabsPage } from './pagetabs.page';

describe('PagetabsPage', () => {
  let component: PagetabsPage;
  let fixture: ComponentFixture<PagetabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagetabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
