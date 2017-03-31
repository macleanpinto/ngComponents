import { Component, Input } from '@angular/core';


@Component({

    selector: 'rebate-edit',
    templateUrl: 'rules-edit.component.html'

})
export class RulesEditComponent {

    private attributeCounter: number = 1;
    list: Object[] = [{ "item1": "pos1" }];
    allowAdd: boolean = true;
    allowDelete: boolean = false;
    index: number;
    private attributeTypeValues: string[];
    //dateValue: string = "2016/10/25";
    private dateValue;
    constructor() {
        this.attributeTypeValues = ['Brand', 'PMC', 'PMG','PSG', 'IS'];
        this.dateValue = new Date();
    }


    onAdd(increment: number) {
        this.attributeCounter++;
        if (this.attributeCounter == 3)
            this.allowAdd = false;
        if (this.attributeCounter > 1)
            this.allowDelete = true;

        this.list.push([{ "item1": "pos1" }]);
    }

    onDelete(index: number) {
        if (this.attributeCounter > 1) {
            this.attributeCounter--;
            // var index = this.list.indexOf(this.elt);
            this.list.splice(index, 1);
        } else {
            alert('No');
        }

        if (this.attributeCounter < 3) {
            this.allowAdd = true;
        }
        if (this.attributeCounter == 1)
            this.allowDelete = false;

    }
    onSelect(value, index) {
        this.attributeTypeValues.splice(value,1);
        console.log(value);
    }

}