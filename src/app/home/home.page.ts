import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrData: null;
  createdCode: null;
  scannerCode: any;

  constructor(private barcode: BarcodeScanner) {}

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannerCode = barcodeData.text;
    }, (err) => {
      console.log('ERR', err);
    });
  }

}
