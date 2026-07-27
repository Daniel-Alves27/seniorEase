import { Component, inject } from '@angular/core';

import { StatisticsService } from '../../../../core/services/statistics.service';

import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-statistics-overview',
  standalone: true,
  imports: [
    StatCard
  ],
  templateUrl: './statistics-overview.html',
  styleUrl: './statistics-overview.css'
})
export class StatisticsOverview {

  statistics = inject(StatisticsService);

}
