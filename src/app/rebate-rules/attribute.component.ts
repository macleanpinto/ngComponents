import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rule-edit-attribute',
    templateUrl: 'attribute.component.html',
    styles: [`.fa-2 { font-size: 1.5em; }`],
    inputs: ['addCheck', 'deleteCheck', 'index', 'attributeTypeValues'],
    outputs: ['add', 'delete', 'selected']

})
export class AttributeComponent {

    private addCheck: boolean;
    private deleteCheck: boolean;
    private index: number;
    private attributeTypeValues: string[];
    private add = new EventEmitter();
    private delete = new EventEmitter();
    private selected = new EventEmitter();
    private previous: Number;
    constructor() { }

    ngOnInit() {
    }
    public addAttribute() {
        this.add.emit();
    }

    public deleteAttribute() {
        this.delete.emit({ selected: this.previous });
    }

    public onChange(index: Number) {
        this.selected.emit({
            selected: index,
            previous: this.previous
        });
        this.previous = index;
    }

    public onFocus(index: Number) {
        this.previous = index;
    }

}