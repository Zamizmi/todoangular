import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule],
})

export class MaterialModule {}
