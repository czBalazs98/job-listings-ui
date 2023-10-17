import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Input()
  isRounded: boolean = false;

  @Input()
  hoverStyleNeeded: boolean = true;

  @Input()
  bgColorClassName: string = 'bg-light-grayish-cyan';

  @Input() 
  textColorClassName: string = 'text-desaturated-dark-cyan';

  @Input()
  removeButtonNeeded: boolean = false;

  @Output() 
  removeEvent = new EventEmitter<void>();

  @Input({required: true})
  text!: string;

  removeButtonClicked() {
    this.removeEvent.emit();
  }
}
