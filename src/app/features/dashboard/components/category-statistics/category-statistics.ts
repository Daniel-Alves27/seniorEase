import { Component, inject } from '@angular/core';
import { StatisticsService } from '../../../../core/services/statistics.service';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-category-statistics',
  imports: [CardComponent],
  templateUrl: './category-statistics.html',
  styleUrl: './category-statistics.css',
})
export class CategoryStatistics {
  statistics = inject(StatisticsService);
}
