/**
 * サイドナビゲーションの描画するコンポーネント
 */

import { Component, EventEmitter, Output } from '@angular/core';

/* Models */
import { MenuItem } from '../../shared/model/other.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() invokeSnavClose = new EventEmitter();

  private _menuItems: MenuItem[] = [
    {
      name: 'Map',
      route: 'maps',
      id: 'menuMap',
      icon: 'map'
    }
  ];

  get menuItems(): MenuItem[] {
    return this._menuItems;
  }
}
