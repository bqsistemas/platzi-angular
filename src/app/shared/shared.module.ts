import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './../shared/pipes/exponential/exponential.pipe';
import { HighlightDirective } from './../shared/directives/highlight/highlight.directive';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { PageNotFoundComponent } from './../shared/components/page-not-found/page-not-found.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
