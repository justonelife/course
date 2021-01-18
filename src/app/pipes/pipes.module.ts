import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitCharacterPipe } from './limit-character.pipe';
import { NameToUrlPipe } from './name-to-url.pipe';



@NgModule({
  declarations: [
    LimitCharacterPipe,
    NameToUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LimitCharacterPipe,
    NameToUrlPipe
  ]
})
export class PipesModule { }
