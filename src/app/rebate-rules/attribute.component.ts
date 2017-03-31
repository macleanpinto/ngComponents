import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rule-edit-attribute',
    templateUrl: 'attribute.component.html',
    styles: [`.fa-2 {
    font-size: 2em;
}`],
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
    constructor() { }

    ngOnInit() {
    }
    public addAttribute() {
        this.add.emit({ increment: 1 });
    }

    public deleteAttribute() {
        this.delete.emit({ increment: -1 });
    }

    public onChange(value: String) {
        this.selected.emit({ selected: value });
    }

 
}