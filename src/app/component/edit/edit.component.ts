import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RuleDetailComponent} from "../rule-detail/rule-detail.component";
import {ProtocolService} from "../../service/protocal/protocol.service";
import {Protocol} from "../../models/protocol.interface";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, MatTableModule, MatPaginatorModule, RuleDetailComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit{
  protocolType: string[];
  protocolChoice: string = "";
  displayProtocolList: Protocol[];
  displayedColumns: string[] = ['index', 'height', 'weight', 'age', 'gender', 'concentration', 'totalVolume', 'flowRate', 'action',];
  dataSource = new MatTableDataSource<Protocol>([]);

  constructor(private protocolService: ProtocolService) {}

  ngOnInit(): void {
    this.protocolType = this.protocolService.getProtocolType();
    this.displayProtocolList = this.protocolService.getAllProtocols();
    this.dataSource = new MatTableDataSource<Protocol>(this.displayProtocolList);
  }

  // filter table by choice of protocol
  chooseProtocol(choice: string) {
    this.protocolChoice = choice;
    this.displayProtocolList = this.protocolService.allProtocols.filter(e=> e.protocol === choice || this.protocolChoice == "");
    this.dataSource = new MatTableDataSource<Protocol>(this.displayProtocolList);
  }

  deleteProtocol(id: number) {
    this.protocolService.deleteProtocolById(id);
    this.recalculateTable();
  }

  // reset display protocol list and table data source
  recalculateTable() {
    this.displayProtocolList = this.protocolService.allProtocols.filter(e=> e.protocol === this.protocolChoice || this.protocolChoice == "" );
    this.dataSource = new MatTableDataSource<Protocol>(this.displayProtocolList);
  }



  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



}
