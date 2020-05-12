import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, toggleSomething, AppState, getIsLoading } from './reducers';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'sample-app';

  readonly isLoading$ = this.store.pipe(select(getIsLoading));
  constructor(private readonly store: Store<State>) { }

  ngOnInit() {
    interval(2500).subscribe(() => this.store.dispatch(toggleSomething()));
  }
}
