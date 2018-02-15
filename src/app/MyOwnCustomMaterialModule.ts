import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule, DataSource} from '@angular/cdk/table';



@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule],
})
export class MyOwnCustomMaterialModule { }
