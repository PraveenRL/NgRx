import { Component, OnInit } from '@angular/core';
import { CustomObservable } from './custom-observable';


@Component({
  selector: 'app-observable-custom',
  templateUrl: './observable-custom.component.html',
  styleUrls: ['./observable-custom.component.scss']
})
export class ObservableCustomComponent implements OnInit {

  constructor() {
    this.customFun$.subscribe(x => {
      console.log('subscribe 1', x);
    });
    
    this.customFun$.subscribe(x => {
      console.log('subscribe 2', x);
    });
   }

  ngOnInit(): void {
  }

  public customFun$ = new CustomObservable(subscriber => {
    subscriber.next('next 1');
    subscriber.next('next 2'); 
  })

  onClickSubscribe(){
    this.customFun$.subscribe(x => {
      console.log('1', x);
    })
  }

}
