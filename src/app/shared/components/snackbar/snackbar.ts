import {
  Component,
  computed,
  inject
} from '@angular/core';

import { SnackbarStore } from '../../../core/store/snackbar.store';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.css'
})
export class SnackbarComponent {

  readonly snackbarStore = inject(SnackbarStore);

  readonly backgroundClass = computed(() => {
    const type = this.snackbarStore.current()?.type;

    switch (type) {
    case 'success':
      return 'bg-green-600';

    case 'error':
      return 'bg-red-600';

    case 'warning':
      return 'bg-yellow-500';

    default:
      return 'bg-blue-600';
    }
  });
}
