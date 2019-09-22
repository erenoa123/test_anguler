import { Component } from '@angular/core';

/* CDK */
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

/* Components */
import { MarkComponent } from '../shared/mark/mark.component';

/* Models */
import { MarkPosition } from '../shared/model/mark-position.model';

@Component({
  selector: 'app-erangel',
  templateUrl: './erangel.component.html',
  styleUrls: ['./erangel.component.scss']
})
export class ErangelComponent {
  private _markingPositions: MarkPosition[] = [];
  private _overlayRefs: OverlayRef[] = [];
  private _iconSize = 24;

  constructor(private overlay: Overlay) {}

  markOnMap(event: any): void {
    const targetMarkingPosition: MarkPosition = {
      x: event.x,
      y: event.y
    };

    if (!this.hasMarkingPosition(targetMarkingPosition)) {
      this.addMarkingPosition(targetMarkingPosition);
    }
  }

  private hasMarkingPosition(targetMarkingPosition: MarkPosition): boolean {
    let hasmarking = false;

    this._markingPositions.forEach(
      (markingPosition: MarkPosition, index: number) => {
        if (
          markingPosition.x - 3 < targetMarkingPosition.x &&
          markingPosition.x + 3 > targetMarkingPosition.x &&
          markingPosition.y - 3 < targetMarkingPosition.y &&
          markingPosition.y + 3 > targetMarkingPosition.y
        ) {
          this.removeMarkingPosition(index);
          hasmarking = true;
        }
      }
    );
    return hasmarking;
  }

  private addMarkingPosition(targetMarkingPosition: MarkPosition): void {
    this._markingPositions.push(targetMarkingPosition);
    const positionStrategy = this.overlay
      .position()
      .global()
      .left(targetMarkingPosition.x - this._iconSize / 2 + 'px')
      .top(targetMarkingPosition.y - this._iconSize - 4 + 'px');
    const config = new OverlayConfig({
      positionStrategy
    });
    this._overlayRefs.push(this.overlay.create(config));
    this._overlayRefs[this._overlayRefs.length - 1].attach(
      new ComponentPortal(MarkComponent)
    );
  }

  private removeMarkingPosition(index: number): void {
    this._markingPositions.splice(index, 1);
    this._overlayRefs[index].detach();
    this._overlayRefs.splice(index, 1);
  }
}
