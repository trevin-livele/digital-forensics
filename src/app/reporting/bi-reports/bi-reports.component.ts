import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Computer Forensics', weight: 1.0079, symbol: 'CF'},
  {position: 2, name: 'Network Forensics', weight: 4.0026, symbol: 'NF'},
  {position: 3, name: 'Email Forensics', weight: 6.941, symbol: 'EF'},
  {position: 4, name: 'Malware Forensics', weight: 9.0122, symbol: 'MF'}
];

@Component({
  selector: 'app-bi-reports',
  templateUrl: './bi-reports.component.html',
  styleUrls: ['./bi-reports.component.scss']
})
export class BiReportsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.sort = new MatSort(); // Initialize MatSort

  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  

}
