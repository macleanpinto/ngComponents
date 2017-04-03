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

    private attributeTypeValues;
    private calcModels: string[];
    private requireReviewOptions: string[];

    //dateValue: string = "2016/10/25";
    private dateValue;
    private rebateRate;
    private selectedCalcModel;
    constructor() {

        this.attributeTypeValues = [{ value: 'Please select', disabled: true, selected: true }, { value: 'Brand', disabled: false }, { value: 'PMC', disabled: false }, { value: 'PMG', disabled: false }, { value: 'PSG', disabled: false }, { value: 'IS', disabled: false }
        ];

        this.calcModels = ['Per case', '% of list', 'Per net wt [LB or KG]', 'Per gross wt [LB or KG]', 'Per 100 wt [LB or KG]', 'Per PO'];
        this.requireReviewOptions = ['Yes', 'No'];

        this.dateValue = new Date();
    }


    onAdd() {
        this.attributeCounter++;
        if (this.attributeCounter == 3)
            this.allowAdd = false;
        if (this.attributeCounter > 1)
            this.allowDelete = true;

        this.list.push([{ "item1": "pos1" }]);
    }

    onDelete(value, index: number) {
        if (value.selected != undefined)
            this.attributeTypeValues[value.selected].disabled = false;
        if (this.attributeCounter > 1) {
            this.attributeCounter--;
            this.list.splice(index, 1);
        } else {
            console.info('No');
        }
        if (this.attributeCounter < 3) {
            this.allowAdd = true;
        }
        if (this.attributeCounter == 1)
            this.allowDelete = false;
    }

    onSelect(index) {
        this.attributeTypeValues[index.selected].disabled = true;
        if (index.previous != 0)
            this.attributeTypeValues[index.previous].disabled = false;
    }

    onChangeCalcModel(value) {
        this.selectedCalcModel = value;
    }

}