import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {ProtocolService} from "../../service/protocal/protocol.service";
import {Protocol} from "../../models/protocol.interface"; // Import CommonModule


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isSearchDirtyFlag: boolean = false;
  isEdit: boolean = false;

  // input
  protocolType: string[];
  protocolChoice: string = "";
  concentration: number;
  height: number;
  weight: number;
  age: number;
  genderChoices: string[] = ["Male", "Female"];
  gender: string;
  totalVolume: number;
  flowRate: number;
  // search output
  searchProtocol: Protocol|null;

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolType = this.protocolService.getProtocolType();
  }

  search(): void {
    this.isSearchDirtyFlag = true;
    this.isEdit = false;
    this.searchProtocol = this.protocolService.searchProtocol(this.protocolChoice, this.concentration, this.height, this.weight, this.age, this.gender)
    console.log(this.searchProtocol)
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  save() {
    if (this.searchProtocol) {
      console.log(this.searchProtocol)
      let replaceSearchProtocol = this.searchProtocol
      replaceSearchProtocol.totalVolume = this.totalVolume;
      replaceSearchProtocol.flowRate = this.flowRate;
      this.protocolService.updateProtocol(replaceSearchProtocol)
    } else {
      this.protocolService.addProtocol(
          this.protocolChoice,
          this.concentration,
          this.height,
          this.weight,
          this.age,
          this.gender,
          this.totalVolume,
          this.flowRate,
      )
    }
    this.isEdit = false;
  }

}

