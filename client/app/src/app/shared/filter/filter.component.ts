import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
	@Output() 
	public onChange: EventEmitter<any> = new EventEmitter<any>();

	public size: string = '';
	public price: string = '';

	constructor() { }

	ngOnInit() {
	}

	onSizeChange() {
		this.onChange.emit({
			type: 'size',
			value: this.size
		})
	}

	onPriceChange() {
		this.onChange.emit({
			type: 'price',
			value: this.price
		})
	}

}
