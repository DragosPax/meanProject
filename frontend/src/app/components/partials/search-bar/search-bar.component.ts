import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm = '';
  notFoundVisible = false;
  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}
