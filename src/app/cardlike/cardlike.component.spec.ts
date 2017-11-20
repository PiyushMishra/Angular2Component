import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlikeComponent } from './cardlike.component';

describe('CardlikeComponent', () => {
  let component: CardlikeComponent;
  let fixture: ComponentFixture<CardlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
