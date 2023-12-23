import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardComponent } from './song-card.component';

describe('SongCardComponent', () => {
  let component: SongCardComponent;
  let fixture: ComponentFixture<SongCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongCardComponent]
    });
    fixture = TestBed.createComponent(SongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
