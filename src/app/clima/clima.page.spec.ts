import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClimaPage } from './clima.page';

describe('ClimaPage', () => {
  let component: ClimaPage;
  let fixture: ComponentFixture<ClimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
