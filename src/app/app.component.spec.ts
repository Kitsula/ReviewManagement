import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { PaginationModule } from 'ng2-bootstrap/pagination';

import { AppComponent } from './app.component';

import { StarComponent } from './shared/star.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StarComponent,
        ReviewListComponent
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot([
          { path: '', redirectTo: 'reviews', pathMatch: 'full' },
          { path: '**', redirectTo: 'reviews', pathMatch: 'full' }
        ]),
        PaginationModule.forRoot()
      ],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  const expectedTitle = 'Review Management';

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Review Management'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(expectedTitle);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(expectedTitle);
  }));

});
