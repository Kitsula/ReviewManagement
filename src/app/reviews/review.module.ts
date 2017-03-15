import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ng2-bootstrap/pagination';

import { ReviewService } from './review.service';

import { StarComponent } from '../shared/star.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forChild([
      { path: 'reviews', component: ReviewListComponent },
      { path: 'review/:id', component: ReviewEditComponent }
    ])
  ],
  declarations: [
    StarComponent,
    ReviewListComponent,
    ReviewEditComponent
  ],
  providers: [ ReviewService ]
})
export class ReviewModule { }
