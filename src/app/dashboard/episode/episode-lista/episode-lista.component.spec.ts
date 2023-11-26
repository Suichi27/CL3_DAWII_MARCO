import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListaComponent } from './episode-lista.component';

describe('EpisodeListaComponent', () => {
  let component: EpisodeListaComponent;
  let fixture: ComponentFixture<EpisodeListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeListaComponent]
    });
    fixture = TestBed.createComponent(EpisodeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
