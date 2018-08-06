import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ListWithItemValues { 
	name: string;
	value: string
}

export interface ListWithEditItem {
	name: string;
	values: ListWithItemValues[];
}

@Component({
	selector: 'config-list-with-edit',
	templateUrl: './list-with-edit.component.html',
	styleUrls: ['./list-with-edit.component.css']
})
export class ListWithEditComponent implements OnInit {

	@Input() items: ListWithEditItem[];

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit() {
	}

	openDialog(item: ListWithEditItem): void {
		const dialogRef = this.dialog.open(ListWithItemValuesDialog, {
			data: item
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			console.log(result);
		});
	}

}



@Component({
	selector: 'config-list-with-edit-dialog',
	templateUrl: './list-with-edit-dialog.component.html',
})
export class ListWithItemValuesDialog {

	constructor(
		public dialogRef: MatDialogRef<ListWithItemValuesDialog>,
		@Inject(MAT_DIALOG_DATA) public data: ListWithEditItem) { }

	onCancelClick(): void {
		this.dialogRef.close();
	}

}
