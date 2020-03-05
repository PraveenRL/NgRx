import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.scss']
})
export class JoinCreationComponent implements OnInit {
  //timer --------------------------------------------
  public firstTimer = timer(0, 1000);
  public secondTimer = timer(500, 1000);
  //combineLatest ------------------------------------
  combineTimer = combineLatest(this.firstTimer, this.secondTimer);

  public firstInterval = interval(1000).pipe(map(x => x + 10));
  public secondInterval = interval(3000).pipe(map(x => x + 100));
  combineInterval = combineLatest(this.firstInterval, this.secondInterval);
  constructor() { }
  ngOnInit(): void { }

  onClickCombineLatestTimer() {
    this.combineTimer.subscribe(value => console.log(value));
  }
  
  onClickCombineLatestInterval() {
    this.combineInterval.subscribe(value => console.log(value));
  }

}
