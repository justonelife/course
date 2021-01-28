import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitCharacterPipe } from './limit-character.pipe';
import { NameToUrlPipe } from './name-to-url.pipe';
import { FilterPipe } from './filter.pipe';
import { TruncatePipe } from './truncate.pipe';
import { IdToNamePipe } from './id-to-name.pipe';
import { SelectboxPipe } from './selectbox.pipe';

@NgModule({
  declarations: [
    LimitCharacterPipe,
    NameToUrlPipe,
    FilterPipe,
    TruncatePipe,
    SelectboxPipe,
    IdToNamePipe
  ],
  imports: [CommonModule],
  exports: [
    LimitCharacterPipe,
    NameToUrlPipe,
    FilterPipe,
    TruncatePipe,
    SelectboxPipe,
    IdToNamePipe
  ],
})

export class PipesModule { }
