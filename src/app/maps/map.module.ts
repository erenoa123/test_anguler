import { NgModule } from '@angular/core';
/* Components */
import { ErangelComponent } from './erangel/erangel.component';
import { MarkComponent } from './shared/mark/mark.component';

@NgModule({
  declarations: [ErangelComponent, MarkComponent],
  imports: [],
  entryComponents: [MarkComponent]
})
export class MapModule {}
