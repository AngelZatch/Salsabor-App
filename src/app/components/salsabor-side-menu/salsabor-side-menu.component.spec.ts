import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsaborSideMenuComponent } from './salsabor-side-menu.component';

describe('SalsaborSideMenuComponent', () => {
  let component: SalsaborSideMenuComponent;
  let fixture: ComponentFixture<SalsaborSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalsaborSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsaborSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
