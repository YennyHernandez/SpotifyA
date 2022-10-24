import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUSerComponent } from './header-user.component';

describe('HeaderUSerComponent', () => {
  let component: HeaderUSerComponent;
  let fixture: ComponentFixture<HeaderUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
