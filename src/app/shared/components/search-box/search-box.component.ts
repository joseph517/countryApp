import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs'
@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSubscription?: Subscription


  @Input()
  public initialValue: string = ""

  @Input()
  public placeHolder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  ngOnInit():void{
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime( 400 )
    )
    .subscribe(value =>{
      this.onValue.emit(value)
    })
  }

  ngOnDestroy():void{
    this.debouncerSubscription?.unsubscribe()
  }

  emitValue(inputValue:string){
    this.debouncer.next(inputValue)

  }

}
