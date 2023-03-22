import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtitleComponent } from './searchtitle.component';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse } from 'src/app/omdbresponse';

describe('SearchtitleComponent', () => {
  let component: SearchtitleComponent;
  let fixture: ComponentFixture<SearchtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
