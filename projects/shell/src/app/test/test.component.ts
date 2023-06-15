import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TestStore } from './test.store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [TestStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  @Input() set id(value: string) {
    this.store.setId(value);
  }

  id$: Observable<string>;
  counter$: Observable<number>;

  constructor(private readonly store: TestStore) {
    this.id$ = store.id$;
    this.counter$ = store.counter$;

    store.inc(Math.floor(Math.random() * 100)+1);
  }

  increase() {
    this.store.inc();
  }

  runEffect() {
    this.store.noParamEffect();
  }
}
