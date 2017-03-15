import { Injectable } from '@angular/core';

import { Review } from './review';

@Injectable()
export class ReviewService {

  constructor() {
    if (localStorage.getItem('reviews') === null) {
      this.reset();
    }
  }

  getReviews(): Review[] {
    return JSON.parse(localStorage.getItem('reviews'));
  }

  getReview(id: number): Review {
    const result = this.getReviews().filter(r => r.id === id);
    if (result.length === 1) {
      return result[0];
    }
    return null;
  }

  deleteReview(id: number): void {
    const reviews = this.getReviews();
    const reviewToDelete = reviews.filter(r => r.id === id);
    if (reviewToDelete.length === 1) {
      const rIndex = reviews.indexOf(reviewToDelete[0]);
      reviews.splice(rIndex, 1);
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  }

  saveReview(review: Review): Review {
    const reviews = this.getReviews();
    const reviewToChange = reviews.filter(r => r.id === review.id);
    if (reviewToChange.length === 1) {
      const rIndex = reviews.indexOf(reviewToChange[0]);
      reviews[rIndex] = review;
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
    return review;
  }

  reset() {
    localStorage.setItem('reviews', JSON.stringify(this.getMockedReviews()));
  }

  private getMockedReviews(): Review[] {
    return [
      {
        id: 1,
        created: new Date(2017, 3, 12, 17, 29, 32),
        product: 'Foo',
        rating: 4.8,
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend faucibus metus at ullamcorper. 
                  Integer molestie augue vel augue bibendum, ac semper sem suscipit. Phasellus elementum felis sit amet ligula iaculis, 
                  vel posuere nisi gravida. Aenean consectetur nisi metus, ultricies pretium metus rutrum id. Nulla sit amet aliquet nisl. 
                  Ut in vehicula ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  Cras nec eros mollis ante tristique sodales.`,
        approved: true,
        visible: true
      },
      {
        id: 2,
        created: new Date(2017, 3, 12, 17, 30, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 3,
        created: new Date(2017, 3, 13, 17, 31, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse potenti. Morbi tristique tellus et cursus mattis. Proin vestibulum neque in dapibus bibendum. 
                  Mauris in pharetra enim. Sed massa massa, venenatis vitae pellentesque vel, hendrerit at tellus. Phasellus eu.`,
        approved: true,
        visible: true
      },
      {
        id: 4,
        created: new Date(2017, 3, 14, 17, 32, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non mi ex. Pellentesque pretium dolor eros, 
                  ac auctor leo auctor vitae. Sed consequat malesuada faucibus. Quisque a pellentesque quam. Pellentesque.`,
        approved: true,
        visible: true
      },
      {
        id: 5,
        created: new Date(2017, 3, 14, 17, 33, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 6,
        created: new Date(2017, 3, 15, 17, 30, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 7,
        created: new Date(2017, 3, 15, 17, 32, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 8,
        created: new Date(2017, 3, 15, 17, 33, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 9,
        created: new Date(2017, 3, 15, 17, 36, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 10,
        created: new Date(2017, 3, 16, 17, 20, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 11,
        created: new Date(2017, 3, 16, 17, 30, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 12,
        created: new Date(2017, 3, 16, 17, 31, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 13,
        created: new Date(2017, 3, 16, 17, 33, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 14,
        created: new Date(2017, 3, 16, 17, 40, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 15,
        created: new Date(2017, 3, 16, 17, 50, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      },
      {
        id: 16,
        created: new Date(2017, 3, 16, 17, 55, 55),
        product: 'Foo',
        rating: 3.5,
        comment: `Suspendisse mollis, massa id lobortis pharetra, nisi felis pulvinar massa, et sagittis nulla quam ac mauris. 
                  Duis sed fermentum magna, vitae suscipit quam. Vivamus lacinia eros ac tortor facilisis, id placerat neque cursus. 
                  Mauris imperdiet tincidunt vulputate. Sed ut leo in tellus consectetur elementum posuere sed ipsum. 
                  Fusce condimentum erat ante, ac ultricies nulla sollicitudin ac. Praesent porttitor tempor neque ut porta.`,
        approved: true,
        visible: true
      }
    ];
  }
}
