import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "./component/search/search.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {EditComponent} from "./component/edit/edit.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import {MatTabsModule} from '@angular/material/tabs';
import {ProtocolService} from "./service/protocal/protocol.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, EditComponent, MatIconModule,MatDividerModule,MatButtonModule, CommonModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ge-xinyuan';

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolService.getProtocolsFromBackend();
  }

}
