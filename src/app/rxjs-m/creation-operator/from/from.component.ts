import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  //From ------------------
  // public data = from(fetch("https://5d3c1d02301f26001416ac6c.mockapi.io/users"))
  //   .pipe(map(x => {
  //     console.log(x.json);
  //   }))
  public data = from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

  from() {
    this.data.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.log(err);
      }
    })
  }
  //---------------------

  //Take -------------

  // whileFunc(){
  //   let i = 0;
  //   while (i == 100) {
  //     i++;
  //     return i;
  //   }
  // }

  // public iterator = this.whileFunc();
  // public result = from(this.iterator).pipe(take(10))
  take(){
  }


}
