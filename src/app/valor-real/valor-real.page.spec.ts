import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValorRealPage } from './valor-real.page';

describe('ValorRealPage', () => {
  let component: ValorRealPage;
  let fixture: ComponentFixture<ValorRealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorRealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorRealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
