import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsaborNavComponent } from './salsabor-nav.component';

describe('SalsaborNavComponent', () => {
  let component: SalsaborNavComponent;
  let fixture: ComponentFixture<SalsaborNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalsaborNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsaborNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
