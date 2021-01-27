import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitCharacterPipe } from './limit-character.pipe';
import { NameToUrlPipe } from './name-to-url.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [LimitCharacterPipe, NameToUrlPipe, FilterPipe],
  imports: [CommonModule],
  exports: [LimitCharacterPipe, NameToUrlPipe, FilterPipe],
})
export class PipesModule {}
