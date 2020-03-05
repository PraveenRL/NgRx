import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styles: []
})
export class CreationOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //fromEvent --------------------------
    const fromEventVar = fromEvent(document.getElementById('fromEventDOM'), 'click')
    fromEventVar.subscribe(n => {
      console.log(`fromEvent ${n}`);
    })

    //fromEvent with take
    const fromEventTakeVar = fromEvent(document.getElementById('fromEventDOM'), 'click').pipe(take(10))
    fromEventTakeVar.subscribe(n => {
      console.log(`fromEvent with take ${n}`);
    })
    //------------------------------------
  }

  //interval -------------------------------
  public intervalCounter = interval(1000);
  interval() {
    this.intervalCounter.subscribe(n => {
      console.log(`Count ${n}`);
    })
  }

  //interval with take --------------------- [take => ends after 10 number]
  public intervalTakeCounter = interval(1000).pipe(take(10));
  intervalTake() {
    this.intervalTakeCounter.subscribe(n => {
      console.log(`Count ${n}`);
    })
  }

  //of -----------------------------
  public of = of(1, 2, 3, 4, 5);

  of_Func() {
    this.of.subscribe(x => {
      console.log(`of ${x}`);
    })
  }


}
