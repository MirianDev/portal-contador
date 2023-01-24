import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";

import { Router } from "@angular/router";
import { EmpresasService } from "src/app/core/empresas.service";
import { Empresa } from "src/app/models/empresa";

@Component({
  selector: "app-alteracao-impostos",
  templateUrl: "./alteracao-impostos.component.html",
  styleUrls: ["./alteracao-impostos.component.scss"],
})
export class AlteracaoImpostosComponent implements OnInit {
  private empresas: Empresa[] = [];
  empresasFiltradas: Empresa[] = [];
  queryField = new FormControl();
  displayedColumns: string[] = ["cnpj", "nome", "grupo", "areaIcone"];
  dataSource = new MatTableDataSource();
  clickedRows = new Set<any>();
  usuarioLogado: Empresa = {
    cnpj: "12.345.600/0001-10",
    codigo: 1,
    grupo: "",
    nome: "RB Contabilidade",
    regimeTributario: 0,
  };

  @Input() voltar!: false;

  constructor(
    private empresasService: EmpresasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.empresasService.getAll().subscribe((res: any) => {
      this.empresas = res;
      this.empresasFiltradas = res;
      this.dataSource.data = res;
    });
  }

  navegar(empresa: Empresa) {
    this.router.navigate(
      [
        `alteracaoimpostosEstaduais/${empresa.cnpj
          .replace(".", "")
          .replace(".", "")
          .replace("/", "")
          .replace("-", "")}`,
      ],
      { queryParams: { regimeTributario: empresa.regimeTributario } }
    );
  }

  onSearch() {
    if (this.queryField.value == "") {
      this.empresasFiltradas = this.empresas;
      return;
    }

    const empresasFiltradas = this.empresas.filter((l) =>
      l.cnpj.includes(this.queryField.value)
    );

    this.empresasFiltradas = empresasFiltradas;
  }

  aplicarFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
