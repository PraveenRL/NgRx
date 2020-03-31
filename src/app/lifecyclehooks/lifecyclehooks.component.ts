import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent {

  public showChild: boolean = false;

  public name: string = "Angular";

  constructor() { }

  toggleChild(){
    this.showChild = !this.showChild;
  }

}
