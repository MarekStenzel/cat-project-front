import { animate, style, transition, trigger } from '@angular/animations';

export const grow = trigger('grow', [
  transition('* <=> *', [
    style({opacity: 0}),
    animate('0.5s ease'),
  ])
]);
