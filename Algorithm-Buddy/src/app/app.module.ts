import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'hammerjs';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { AlgorithmListComponent } from './algorithm-list/algorithm-list.component';
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AlgorithmCategoryComponent } from './algorithm-category/algorithm-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SafePipe } from './pipe';
import { StackmatDialogComponent } from './stackmat-dialog/stackmat-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AlgoExplanationComponent } from './algo-explanation/algo-explanation.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimerComponent,
    AlgorithmListComponent,
    AlgorithmDetailComponent,
    AlgorithmCategoryComponent,
    SafePipe,
    StackmatDialogComponent,
    AlgoExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    HammerModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
