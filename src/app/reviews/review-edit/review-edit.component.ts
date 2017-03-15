import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Review } from '../review';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  title: string;
  review: Review;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reviewService: ReviewService) {
  }

  ngOnInit() {
    const reviewId = +this.route.snapshot.params['id'];
    this.title = `Edit review with ID: ${reviewId}`;
    this.review = this.reviewService.getReview(reviewId);
  }

  onSubmit() {
    this.reviewService.saveReview(this.review);
    this.router.navigate(['/reviews']);
  }
}
