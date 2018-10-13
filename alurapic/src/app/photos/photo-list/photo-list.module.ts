import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchModule } from './search/search.module';

@NgModule({
	declarations: [ 
			PhotoListComponent, 
			PhotosComponent, 
			FilterByDescriptionPipe, 
			LoadButtonComponent
	],
	imports: [ 
		CommonModule,
		PhotoModule,
		CardModule,
    DarkenOnHoverModule,
    SearchModule,
    RouterModule
	]
})
export class PhotoListModule { }