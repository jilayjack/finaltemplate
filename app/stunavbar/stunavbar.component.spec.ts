import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StunavbarComponent } from './stunavbar.component';

describe('StunavbarComponent', () => {
  let component: StunavbarComponent;
  let fixture: ComponentFixture<StunavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StunavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StunavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
