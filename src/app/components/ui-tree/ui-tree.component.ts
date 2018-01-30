import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ui-tree',
  template: `
    <ul *ngIf="menuList.length" class="hasChildren">
    <li *ngFor="let item of menuList" class="listItem">
        <a href >{{item.name}}</a>
        <ui-tree *ngIf="item[key].length" [key]="key" [data]="item[key]" ></ui-tree>
    </li>
  </ul>
  `,
  styleUrls: ['./ui-tree.component.css']
})
export class UiTreeComponent  {
  @Input('data') menuList: Array<Object>;
  @Input('key') key: string;

}
