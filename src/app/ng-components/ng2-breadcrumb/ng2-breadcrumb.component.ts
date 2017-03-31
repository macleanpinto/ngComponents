import { NgModule, Component, Input, OnDestroy, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
    selector: 'ng2-breadcrumb',
    template: `
<div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'">
    <ul>
        <ul>
            <template ngFor let-item let-end="last" [ngForOf]="model">
                <li role="menuitem">
                    <a [routerLink]="[{ outlets: { 'breadcrumb': [item.url] } }]" routerLinkActive="active-link" class="ui-menuitem-link">
                        <span class="ui-menuitem-text">{{item.label}}</span>
                    </a>
                </li>
                <li class="ui-breadcrumb-chevron fa fa-chevron-right" *ngIf="!end"></li>
            </template>
        </ul>
    </ul>
</div>
    `,
    styleUrls: ['./ng2-breadcrumb.component.css']
})
export class Ng2BreadcrumbComponent {

    @Input() model: any[];

    @Input() style: any;

    @Input() styleClass: string;

}
