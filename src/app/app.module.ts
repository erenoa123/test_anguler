import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MapModule } from './maps/map.module';

/* Components */
import { AppComponent } from './app.component';

/* Materials */
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    MapModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
