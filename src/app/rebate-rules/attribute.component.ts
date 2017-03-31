import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rule-edit-attribute',
    templateUrl: 'attribute.component.html'

})
export class AttributeComponent {

    @Input() private addCheck : boolean;
    @Input() private deleteCheck : boolean;
    @Input() private attributeCounter : number;
    @Input() private index : number;
    @Input() private attributeTypeValues : string[];
    @Output() private add = new EventEmitter();
    @Output() private delete = new EventEmitter();
    private seachText: String;
    constructor() { }

    ngOnInit() {
    }
    public addAttribute() {
       // alert('Add');
        this.add.emit({ increment: 1 });
    }

    public deleteAttribute() {
       // alert('Delete');
        this.delete.emit({ increment: -1 });
    }

}