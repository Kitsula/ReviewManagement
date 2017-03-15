import { Component, OnInit } from '@angular/core';

import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  title = 'Reviews';
  allReviews: Review[];
  reviews: Review[];
  totalItems: number;
  currentPage = 0;
  itemsPerPage = 5;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.allReviews = this.reviewService.getReviews();
    this.totalItems = this.allReviews.length;
    this.pageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  public pageChanged(event: any): void {
    if (event.page === this.currentPage) {
      return;
    }
    this.reviews = this.allReviews.slice((event.page - 1) * event.itemsPerPage,  event.page * event.itemsPerPage);
  }

  public onDelete(reviewId: number): void {
    this.reviewService.deleteReview(reviewId);
    this.allReviews = this.reviewService.getReviews();
    this.totalItems = this.allReviews.length;
    if (this.totalItems % this.itemsPerPage === 0 && this.currentPage > this.totalItems / this.itemsPerPage) {
      this.pageChanged({ page: this.currentPage - 1, itemsPerPage: this.itemsPerPage });
    } else {
      this.reviews = this.allReviews.slice((this.currentPage - 1) * this.itemsPerPage,  this.currentPage * this.itemsPerPage);
    }
  }

  public onReset() {
    this.reviewService.reset();
    this.currentPage = 0;
    this.ngOnInit();
  }
}
