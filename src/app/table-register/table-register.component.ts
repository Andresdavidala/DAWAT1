import { Component, OnInit } from '@angular/core';
import { WindowModelService } from '../services/window-model.service';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css']
})
export class TableRegisterComponent implements OnInit {

  constructor(private modalService: WindowModelService) { }

  ngOnInit(): void {
  }

  cerrarModelWindow(){

    this.modalService.$modal.emit(false)
  }
}
