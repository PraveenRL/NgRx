import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() {
    //tap ------------------[gives side effect]
    const clicks = fromEvent(document, 'click');
    clicks.pipe(tap(ev => console.log(ev))).subscribe(x => console.log(x))
  }

  ngOnInit(): void {
  }

}
