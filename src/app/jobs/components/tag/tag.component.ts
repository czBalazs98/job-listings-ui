import { Component, Input } from '@angular/core';

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
}
