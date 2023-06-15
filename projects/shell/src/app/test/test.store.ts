import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { pipe, tap, withLatestFrom } from 'rxjs';

export interface TestState {
  id: string;
  counter: number;
}

export const initialState: TestState = {
  id: 'unset',
  counter: 0
};

@Injectable()
export class TestStore extends ComponentStore<TestState> implements OnDestroy {
  readonly id$ = this.select(state => state.id);
  readonly counter$ = this.select(state => state.counter);

  readonly setId = this.updater<string>((state, id) => {
    return { ...state, id };
  });

  readonly inc = this.updater<number | void>((state, count) => {
    count = count ?? 1;
    return { ...state, counter: state.counter + count };
  });

  constructor() {
    super(initialState)
  }

  override ngOnDestroy() {
    console.log(`TestStore ${this.get(state => state.id)} ngOnDestroy`);
    super.ngOnDestroy();
  }

  noParamEffect = this.effect<void>(pipe(
    withLatestFrom(this.counter$, (_, counter: number) => counter),
    tap((counter: number) => alert(`noParamEffect ${counter}`))
  ));
}
