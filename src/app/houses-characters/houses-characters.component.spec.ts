import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCharactersComponent } from './houses-characters.component';

describe('HousesCharactersComponent', () => {
  let component: HousesCharactersComponent;
  let fixture: ComponentFixture<HousesCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
