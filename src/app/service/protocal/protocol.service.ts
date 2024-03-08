import { Injectable } from '@angular/core';
import {PeriodicElement} from "../../models/periodicElement.interface";
import {MOCK_PROTOCOL_RESPONSE} from "./mock-protocols"
import {Protocol} from "../../models/protocol.interface";

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  allProtocols: Protocol[];
  protocolType: string[];

  constructor() { }

  protocolList: Protocol[];

  // your service goes here
  getProtocolsFromBackend(): void {
    this.allProtocols = MOCK_PROTOCOL_RESPONSE;
    this.protocolType =  this.getUniqueProtocols(MOCK_PROTOCOL_RESPONSE);
    console.log(this.protocolType);
    console.log('Success Load mock Data');
  }

  getUniqueProtocols(data: Protocol[]): string[] {
    const protocolSet = new Set<string>();
    data.forEach(item => protocolSet.add(item.protocol));
    return Array.from(protocolSet);
  }

  getAllProtocols(): Protocol[] {
    return this.allProtocols;
  }

  getProtocolType(): string[] {
    return this.protocolType;
  }
}
