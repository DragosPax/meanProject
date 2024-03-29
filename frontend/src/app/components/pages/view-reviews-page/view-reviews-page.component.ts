import { Component } from '@angular/core';
import { IReview } from '../../../shared/interfaces/IReview';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-view-reviews-page',
  standalone: true,
  imports: [CommonModule, StarRatingModule],
  templateUrl: './view-reviews-page.component.html',
  styleUrl: './view-reviews-page.component.scss',
  providers: [StarRatingConfigService],
})
export class ViewReviewsPageComponent {
  reviews: IReview[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getReviews().subscribe((serverReviews) => {
      this.reviews = serverReviews;
    });
  }
}
