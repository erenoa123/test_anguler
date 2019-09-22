import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* CDK Module */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [],
  imports: [BrowserModule, OverlayModule, PortalModule]
})
export class SharedModule {}
