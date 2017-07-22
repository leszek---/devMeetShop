import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public users = [
    {name: 'Aaa', id: 1},
        {name: 'Bbb', id: 2},
            {name: 'Ccc', id: 3},
  ];
}
