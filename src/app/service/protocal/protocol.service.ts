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

  // your service goes here
  getProtocolsFromBackend(): void {
    this.allProtocols = MOCK_PROTOCOL_RESPONSE;
    this.protocolType =  this.getUniqueProtocols(MOCK_PROTOCOL_RESPONSE);
    console.log('Success Load mock Data');
  }

  searchProtocol(protocol: string, concentration: number, height: number, weight: number, age: number, gender: string ) :Protocol|null {
    const result = this.allProtocols.filter(e =>
        e.protocol == protocol
        && e.concentration == concentration
        && e.height == height
        && e.weight == weight
        && e.age == age
        && e.gender == gender
    )
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }

  addProtocol(protocol: string, concentration: number, height: number, weight: number, age: number, gender: string, totalVolume: number, flowRate: number): void {
    let newProtocol : Protocol = {
      protocol: protocol,
      index: this.allProtocols.length,
      concentration: concentration,
      height: height,
      weight: weight,
      age: age,
      gender: gender,
      totalVolume: totalVolume,
      flowRate: flowRate,
    }
    this.allProtocols.push(newProtocol);
  }

  updateProtocol(protocol: Protocol): void {
    this.allProtocols.filter(e => e.index == protocol.index)[0].flowRate = protocol.flowRate;
    this.allProtocols.filter(e => e.index == protocol.index)[0].totalVolume = protocol.totalVolume;
  }


  // backend api
  deleteProtocolById(id: number): void {
    this.allProtocols = this.allProtocols.filter(e => e.index != id);
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
