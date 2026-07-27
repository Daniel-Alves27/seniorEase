import { Component } from '@angular/core';

import { WelcomeCardComponent } from './components/welcome-card/welcome-card';
import { TaskSummary } from '../tasks/components/task-summary/task-summary';
import { QuickActions } from './components/quick-actions/quick-actions';
import { MotivationCardComponent } from './components/motivation-card/motivation-card';
import { RemindersCard } from "./components/reminders-card/reminders-card";
import { StatisticsOverview } from "./components/statistics-overview/statistics-overview";
import { CategoryStatistics } from "./components/category-statistics/category-statistics";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Header } from "../../layout/header/header";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WelcomeCardComponent,
    TaskSummary,
    QuickActions,
    MotivationCardComponent,
    RemindersCard,
    StatisticsOverview,
    CategoryStatistics,
    ButtonComponent,
    Header
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {}
