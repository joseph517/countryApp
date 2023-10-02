import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeHolder: string = ''

  @Output()
  onValue = new EventEmitter<string>()

  emitValue(inputValue:string){
    this.onValue.emit(inputValue)
  }

}
