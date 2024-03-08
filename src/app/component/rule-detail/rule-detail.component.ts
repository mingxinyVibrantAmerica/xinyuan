import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {Protocol} from "../../models/protocol.interface";
import {ProtocolService} from "../../service/protocal/protocol.service";

@Component({
  selector: 'app-rule-detail',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './rule-detail.component.html',
  styleUrl: './rule-detail.component.css'
})
export class RuleDetailComponent {
  protocolType: string[];
  @Input() shown: boolean;
  @Output() shownChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() Protocol: Protocol;

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolType = this.protocolService.getProtocolType();
  }

  cancel() {
    this.close();
  }

  close() {
    this.shownChange.emit(false);
  }
}
