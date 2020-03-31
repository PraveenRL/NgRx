import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent implements OnInit, OnDestroy, OnChanges {

  public setIntervalInstance = null;
  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log("Component Initilized");
    this.setIntervalInstance = setInterval(() => {
      console.log('setInterval');
    }, 1000)
  }

  ngOnDestroy() {
    console.log("Component Destroyed");
    if (this.setIntervalInstance) {
      clearInterval(this.setIntervalInstance);
    }
  }

}
