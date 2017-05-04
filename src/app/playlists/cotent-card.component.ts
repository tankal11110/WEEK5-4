import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cotent-card',
  template: `
    <div class="thumbnail">
        <div class="caption">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
        <ng-content></ng-content>
    </div>  
  `,
  styles: []
})
export class CotentCardComponent implements OnInit {

  @Input()
  title = "";

  @Input()
  content = "";

  constructor() { }

  ngOnInit() {
  }

}
