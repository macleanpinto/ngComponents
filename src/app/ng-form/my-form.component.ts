import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Hero } from './hero';

@Component({
    selector: 'demo-form-sku-builder',
    templateUrl: 'my-form.component.html'
})
export class DemoFormSkuBuilder {
    private companies: String[] = ["US", "Canada", "Russia"];
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit(form: any) {
    this.submitted = true;
        console.log(form);
    }
    
    newHero() {
        this.model = new Hero(42, '', '');
    }
}