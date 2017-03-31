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
    index : number;
    private attributeTypeValues : string[];

    constructor(){
        this.attributeTypeValues = ['1','2','3','4'];
    }


    onAdd(increment: number) {
        console.log(increment);
        this.attributeCounter++;
        if (this.attributeCounter == 3)
            this.allowAdd = false;
        if(this.attributeCounter > 1)
            this.allowDelete = true;

        this.list.push([{ "item1": "pos1" }]);
    }

    onDelete(increment: number) {
        alert(this.attributeCounter);
        if (this.attributeCounter > 1){
            this.attributeCounter--;
           // this.list.pop();

          // var index = this.list.indexOf(this.elt);
           this.list.splice(increment, 1);
        }else{
            alert('No');
        }

         if (this.attributeCounter < 3){
             this.allowAdd = true;
         }
         if(this.attributeCounter == 1)
            this.allowDelete = false;
         
    }

}