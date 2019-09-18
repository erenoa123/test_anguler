/**
 * ヘッダーを描画するコンポーネント
 */

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() invokeSnavToggle = new EventEmitter();

  private _serviceName = 'PUBG Visualizar';

  // getter
  get serviceName(): string {
    return this._serviceName;
  }
}
