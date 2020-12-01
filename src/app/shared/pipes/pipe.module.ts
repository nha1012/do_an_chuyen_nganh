import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { PluralPipe } from './plural.pipe';
import { RoundPipe } from './round.pipe';
import { TimingPipe } from './timing.pipe';
import { DomainTypePipe } from './domain-type.pipe';

const PIPES = [
  CapitalizePipe,
  NumberWithCommasPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  DomainTypePipe
];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipeModule { }
