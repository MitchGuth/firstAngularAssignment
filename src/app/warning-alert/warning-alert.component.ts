import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning! You are in danger!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: red;
        border: 1px solid darkred;
        color: white;
      }
    `
  ]
})
export class WarningAlertComponent {

}
