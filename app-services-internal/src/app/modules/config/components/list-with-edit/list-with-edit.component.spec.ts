import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithEditComponent } from './list-with-edit.component';

describe('ListWithEditComponent', () => {
	let component: ListWithEditComponent;
	let fixture: ComponentFixture<ListWithEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListWithEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListWithEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
