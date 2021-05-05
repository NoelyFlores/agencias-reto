import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciaService } from 'src/app/core/services/agencia.service';

@Component({
  selector: 'app-lista-agencia',
  templateUrl: './lista-agencia.component.html',
  styleUrls: ['./lista-agencia.component.css']
})
export class ListaAgenciaComponent implements OnInit {
  agencias: any[] = [];
  constructor( private agenciaService: AgenciaService, private router: Router, ) {
    this.agenciaService.dateAgencia.subscribe(data => {
      this.agencias = data;
    });
   }

  ngOnInit(): void {    
  }

  onEditarAgencia(data) {
    this.router.navigate(['/agencias', data.id]);
  }

}
