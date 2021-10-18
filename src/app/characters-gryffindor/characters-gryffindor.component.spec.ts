import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGryffindorComponent } from './characters-gryffindor.component';

describe('CharactersGryffindorComponent', () => {
  let component: CharactersGryffindorComponent;
  let fixture: ComponentFixture<CharactersGryffindorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersGryffindorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersGryffindorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
