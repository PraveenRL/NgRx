import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { fromEvent, interval, of, from } from 'rxjs';
import { debounceTime, debounce, distinctUntilChanged, filter, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit, AfterViewInit {

  @ViewChild('elementRef', { read: ElementRef }) elementRef: ElementRef;    //Local Reference
  @ViewChild('templateRef') templateRef: TemplateRef<any>;                  //Template Reference --(not clear)

  ngAfterViewInit() {
    console.log(this.elementRef.nativeElement.textContent);
    console.log(this.templateRef.elementRef.nativeElement.textContent);
  }

  constructor() {
  }

  ngOnInit(): void {
    //debounceTime --------------[Print once after the debounceTime, though many events clicks prints only once]
    const debounceTimeClick = fromEvent(document.getElementById('debounceTimeId'), 'click');
    const debounceTime$ = debounceTimeClick.pipe(debounceTime(3000));
    debounceTime$.subscribe(x => {
      console.log(x);
      console.log(this.elementRef.nativeElement.textContent);               //Local Reference
      console.log(this.templateRef.elementRef.nativeElement.textContent);   //Template Reference
    })

    //debounce ------------------[Same as debounceTime, but we can define a function]
    const debounceClick = fromEvent(document.getElementById('debounceId'), 'click');
    const debounce$ = debounceClick.pipe(debounce(() => interval(1000))); //we can give any function
    debounce$.subscribe(x => {
      console.log(x);
    })

    //takeUntil ------------------[Take until the condition]
    const takeUntilClickId = fromEvent(document.getElementById('takeUntilClickId'), 'click');
    const takeUntil$ = this.intervalCount.pipe(takeUntil(takeUntilClickId));
    takeUntil$.subscribe(x => console.log(x));
  }

  //distinceUntilChanged
  public distinctUntilChanged$ = of(1, 1, 2, 2, 2, 3, 3, 5).pipe(distinctUntilChanged());
  onClickDistinctUntilChanged() {
    this.distinctUntilChanged$.subscribe(x => console.log(x))
  }

  //filter -----------[Like Array.prototype.filter(), it only emits a value if it passes a criterion function]
  public source = from([1, 2, 3, 4, 5, 6]);
  public clicksOnFilterId = this.source.pipe(filter(num => num % 2 === 0));
  onClickFilter() {
    this.clicksOnFilterId.subscribe(x => console.log(`Even number ${x}`))
  }

  //take ------------[Takes only upto that times or count]
  public intervalCount = interval(1000);
  public take$ = this.intervalCount.pipe(take(5));
  onClickTake() {
    this.take$.subscribe(x => console.log(x));
  }

}
