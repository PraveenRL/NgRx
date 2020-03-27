import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, combineLatest, interval, concat, forkJoin, merge, race, of, zip, fromEvent } from 'rxjs';
import { map, take, startWith, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.scss']
})
export class JoinCreationComponent implements OnInit, OnDestroy {

  constructor() {
  }
  ngOnInit(): void {
    //combineLatest -------------------------------------[print after both satisfied & continue]
    const interval$ = interval(1000).pipe(take(10), map(x => x + 10));
    const combineLatestDom$ = fromEvent(document.getElementById('combineLatestDom'), 'click');
    const combineLatest$ = combineLatest(interval$, combineLatestDom$)
    combineLatest$.subscribe(x => console.log(x))

    //withLatestFrom ------------------------------------[print once everytime after both satisfied]
    const withLatestFromDom$ = fromEvent(document.getElementById('withLatestFromDom'), 'click');
    const withLatestFrom$ = withLatestFromDom$.pipe(withLatestFrom(interval$));
    withLatestFrom$.subscribe(x => console.log(x))
  }

  ngOnDestroy() { }

  //timer --------------------------------------------
  public firstTimer = timer(0, 1000);
  public secondTimer = timer(500, 1000);
  //combineLatest ------------------------------------[gives every time combinely]
  public combineTimer$ = combineLatest(this.firstTimer, this.secondTimer);

  public firstInterval = interval(1000).pipe(map(x => x + 10));
  public secondInterval = interval(3000).pipe(map(x => x + 100));

  public combineInterval$ = combineLatest(this.firstInterval, this.secondInterval);

  onClickCombineLatestTimer() {
    this.combineTimer$.subscribe(value => console.log(value));
  }

  onClickCombineLatestInterval() {
    this.combineInterval$.subscribe(value => console.log(value));
  }

  //concat --------------------------------------------[run after completing before one]
  public firstConcat = interval(1000).pipe(take(10));
  public secondConcat = interval(3000).pipe(take(5));

  public concat$ = concat(this.firstConcat, this.secondConcat);

  onClickConcat() {
    this.concat$.subscribe(x => console.log(x))
  }

  //forkJoin -------------------------------------------[gives latest after both completed]
  public firstFork = interval(1000).pipe(take(10), map(x => x));
  public secondFork = interval(3000).pipe(take(5), map(x => x + 10));

  public forkJoin$ = forkJoin(this.firstFork, this.secondFork)

  onClickForkJoin() {
    this.forkJoin$.subscribe(x => console.log(x))
  }

  //merge ----------------------------------------------[gives every value not in array]

  public merge$ = merge(this.firstFork, this.secondFork);

  onClickMerge() {
    this.merge$.subscribe(x => console.log(x))
  }

  //race -----------------------------------------------[consider first result observable and ignore the others]

  public race$ = race(this.firstFork, this.secondFork);

  onClickRace() {
    this.race$.subscribe(x => console.log(x))
  }

  //zip ------------------------------------------------[take all stream and gives as object]

  public age$ = of<number>(25, 30, 35, 30, 40, 60);
  public name$ = of<string>("Foo", "Bar", "Beer");
  public isDev$ = of<boolean>(true, true, false);

  public zip$ = zip(this.age$, this.name$, this.isDev$).pipe(map(([age, name, isDev]) => ({ age, name, isDev })));
  public zip1$ = zip(this.age$, this.name$, this.isDev$, (x, y, z) => { return { x, y, z } });
  public zip2$ = zip(this.age$, this.name$, this.isDev$, (x, y) => { return { x, y } });

  onClickZip() {
    // this.zip$.subscribe(x => console.log(x));
    // this.zip1$.subscribe(x => console.log(x));
    this.zip2$.subscribe(x => console.log(x));
  }

  //startWith -----------------------------------------[print before]

  public startWith$ = merge(this.firstFork, this.secondFork).pipe(startWith('start'));

  onClickStartWith() {
    this.startWith$.subscribe(x => console.log(x))
  }






}
