import {
  Component,
  inject
} from '@angular/core';

import { LoadingStore } from '../../../core/store/loading.store';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class LoadingComponent {

  readonly loadingStore = inject(LoadingStore);
}
