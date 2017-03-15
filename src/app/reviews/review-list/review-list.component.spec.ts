import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PaginationModule } from 'ng2-bootstrap/pagination';

import { StarComponent } from '../../shared/star.component';
import { ReviewListComponent } from './review-list.component';
import { ReviewEditComponent } from '../review-edit/review-edit.component';

import { ReviewService } from '../review.service';

describe('ReviewListComponent', () => {
  let component: ReviewListComponent;
  let fixture: ComponentFixture<ReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarComponent,
        ReviewListComponent,
        ReviewEditComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        PaginationModule.forRoot(),
        RouterModule.forChild([
            { path: 'reviews', component: ReviewListComponent },
            { path: 'review/:id', component: ReviewEditComponent }
        ])
      ],
      providers: [ ReviewService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Review List component', () => {
    expect(component).toBeTruthy();
  });

  const expectedTitle = 'Reviews';

  it(`should have as title 'Review Management'`, async(() => {
    expect(component.title).toEqual(expectedTitle);
  }));

  it('should render title in a panel header', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.panel-heading').textContent).toContain(expectedTitle);
  }));

});
