import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ui-tree',
  template: `
  <ul *ngIf="menuList.length">
  <li *ngFor="let item of menuList">
      {{item.name}}
      <ui-tree *ngIf="item[key].length" [key]="key" [data]="item[key]"></ui-tree>
  </li>
</ul>
  `,
  styleUrls: ['./ui-tree.component.css']
})
export class UiTreeComponent  {
  @Input('data') menuList: Array<Object>;
  @Input('key') key: string;

}
