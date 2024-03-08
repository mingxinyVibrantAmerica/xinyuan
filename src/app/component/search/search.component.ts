import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {ProtocolService} from "../../service/protocal/protocol.service"; // Import CommonModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isSearch: boolean = false;
  isEdit: boolean = false;
  protocolType: string[];
  protocolChoice: string = "";

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolType = this.protocolService.getProtocolType();
  }


  toggleSearch(){
    this.isSearch = !this.isSearch;
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

