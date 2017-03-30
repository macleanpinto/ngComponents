
import { NgModule, Component, Input, OnDestroy, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'ng2-breadcrumb',
    template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'">
            <ul>
                <template ngFor let-item let-end="last" [ngForOf]="model">
                    <li role="menuitem">
                        <a [href]="item.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, item)" 
                            [ngClass]="{'ui-state-disabled':item.disabled}" [attr.target]="item.target">
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </a>
                    </li>
                    <li class="ui-breadcrumb-chevron fa fa-chevron-right" *ngIf="!end"></li>
                </template>
            </ul>
        </div>
    `,
      styleUrls: ['./ng2-breadcrumb.component.css']
})
export class Ng2BreadcrumbComponent implements OnDestroy {

    @Input() model: any[];

    @Input() style: any;

    @Input() styleClass: string;

    @Input() home: any;

    constructor(public router: Router) { }

    itemClick(event, item: any)  {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url || item.routerLink) {
            event.preventDefault();
        }

        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }

            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }

        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    }

 

    ngOnDestroy() {
        if (this.model) {
            for (let item of this.model) {
                if (item.eventEmitter) {
                    item.eventEmitter.unsubscribe();
                }
            }
        }
    }

}
