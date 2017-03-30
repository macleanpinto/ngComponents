import { Component, ChangeDetectionStrategy } from '@angular/core';
 
@Component({
  selector: 'ng2-bootstrap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html'
})
export class DynamicTabComponent {
  public tabs: any[] = [
    {title: 'Rebate Rules', content: ''},
    {title: 'Item Exceptions', content: '', disabled: false},
    {title: 'Item Exploder', content: '', removable: false},
    {title: 'Notifications', content: ''},
    {title: 'Rebate Header', content: ''},
    {title: 'Notes and Documents', content: ''}
  ];
 
  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }
 
  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  }
}