import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/core/interfaces/agencia.interface';
import { AgenciaService } from 'src/app/core/services/agencia.service';

@Component({
  selector: 'app-actualizar-agencia',
  templateUrl: './actualizar-agencia.component.html'
})
export class ActualizarAgenciaComponent implements OnInit {
  form: FormGroup;
  agencias: Agencia[] = [];
  paramsId
  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private agenciaService: AgenciaService
  ) {
    
    this.paramsId = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      txtNombreAgencia: ['', [Validators.required]],
      txtDistrito: ['', [Validators.required]],
      txtDireccion: ['', [Validators.required]],
      txtLatitud:['', [Validators.required]],
      txtLongitud: ['', [Validators.required]],
      id:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.agenciaService.dateAgencia.subscribe((data: Agencia[]) => {
      this.agencias = data;
      const agencia = data.find(item => item.id === this.paramsId);
      this.editarAgencia(agencia);
    });
  }

  editarAgencia(data) {
    this.form.setValue({
      txtNombreAgencia: data.agencia,
      txtDistrito: data.distrito,
      txtDireccion: data.direccion,
      txtLatitud: data.lat,
      txtLongitud: data.lon,
      id: data.id
    })
  }

  onSave() {
    const event = this.form.value;
    const index = this.agencias.findIndex(item => item.id === event.id);
    const find = this.agencias.find(item => item.id === event.id);
    if (index >= 0) {
      find.agencia = event.txtNombreAgencia;
      find.direccion = event.txtDireccion;
      find.distrito = event.txtDistrito;
      find.lat = event.txtLatitud;
      find.lon = event.txtLongitud;
      this.agencias[index] = find;
      this.agenciaService.setLocalStorage('agencias', this.agencias);
    }
    this.router.navigate(['/agencias']);
  }

}
