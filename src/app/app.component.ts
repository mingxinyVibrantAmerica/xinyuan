import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {EditComponent} from "./edit/edit.component";
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, EditComponent, MatIconModule,MatDividerModule,MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ge-xinyuan';
  choice = 'search';

  choose(input: string){
    this.choice = input;
  }
}
