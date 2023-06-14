import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TestStore } from './test.store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  @Input() set id(value: string) {
    this.store.setId(value);
  }

  id$: Observable<string>;
  counter$: Observable<number>;
  store: TestStore;

  constructor() {
    this.store = new TestStore();

    this.id$ = this.store.id$;
    this.counter$ = this.store.counter$;

    this.store.inc(Math.floor(Math.random() * 100)+1);
  }

  increase() {
    this.store.inc();
  }
}
