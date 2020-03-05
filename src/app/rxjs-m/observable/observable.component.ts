import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() {
    //Normal
    const test = () => {
      console.log('Normal Test');
      return 1
    };
    test();
  }

  ngOnInit(): void {
  }

  // Observable
  public test$ = new Observable(subscriber => {
    console.log('test$');
    subscriber.next('1');
    subscriber.next('2');
    subscriber.next('3');
    setTimeout(() => {
      subscriber.next('4');
      subscriber.complete();
    }, 1000)
    // subscriber.error('Error Occured');
  });

  onClickSubscribe() {
    this.test$.subscribe({
      next(x) { console.log("Next", x); },
      error(err) { console.log("Error", err); },
      complete() { console.log('Complete'); }
    });
  }
 

}
