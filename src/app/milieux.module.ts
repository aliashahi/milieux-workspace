import { NgModule } from '@angular/core';
import { MilieuxComponent } from './milieux.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MilieuxSidenavTabComponent } from './packages/milieux-sidenav/milieux-sidenav.component';
import { MuilieuxSidenavModule } from '@milieux/sidenav';
import { HttpClientModule } from '@angular/common/http';
const PACKAGES = [MuilieuxSidenavModule];
@NgModule({
  declarations: [MilieuxComponent, MilieuxSidenavTabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ...PACKAGES,
  ],
  providers: [],
  bootstrap: [MilieuxComponent],
})
export class MilieuxModule {}
