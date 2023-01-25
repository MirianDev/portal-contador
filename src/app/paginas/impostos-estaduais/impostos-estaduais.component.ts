import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellValueChangedEvent,
  CheckboxChangedEvent,
  ColDef,
  ValueSetterParams,
} from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { BotaoExcluirCellComponent } from 'src/app/botao-excluir-cell/botao-excluir-cell.component';
import { ProdutosService } from 'src/app/core/produtos.service';
import { Produto } from 'src/app/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-impostos-estaduais',
  templateUrl: './impostos-estaduais.component.html',
  styleUrls: ['./impostos-estaduais.component.scss'],
})
export class ImpostosEstaduaisComponent implements OnInit, AfterViewInit {
  private regimeTributario!: number;
  private gridApi: any;
  public tipoImposto:number;
  //public check: any;

  tituloNavBar:string;
  produtosFiltrados: Produto[] = [];
  queryField = new FormControl();
  frameworkComponents: any;
  produtos: Produto[] = [];
  columnDefs: ColDef[] = [];

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  @ViewChild('simplesNacional')simplesNacionalInpt!: ElementRef<HTMLInputElement>;
  @ViewChild('regimeNormal') regimeNormalInpt!: ElementRef<HTMLInputElement>;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.frameworkComponents = {
      buttonRenderer: BotaoExcluirCellComponent,
    };

    this.tituloNavBar = "Alteração de impostos Estaduais";
  }

  async ngOnInit() {}

  ngAfterViewInit() {
    this.produtosService.getAll().subscribe((res: any) => {
      this.produtos = res;
      this.produtosFiltrados = res;
    });

    this.route.queryParams.subscribe((params: any) => {
      this.regimeTributario = params.regimeTributario;
    });

    if (this.regimeTributario == 1)
      this.simplesNacionalInpt.nativeElement.checked = true;
    else this.regimeNormalInpt.nativeElement.checked = true;

    this.tipoImposto = 1;

    this.carregarColunas();
  }

  onSearch() {
    if (this.queryField.value == '') {
      this.produtosFiltrados = this.produtos;
      return;
    }

    const produtosFiltrados = this.produtos.filter((l) =>
      l.codBarras.includes(this.queryField.value)
    );

    this.produtosFiltrados = produtosFiltrados;
  }

  selecionarChecado(
    iconeAntigo: HTMLImageElement,
    iconeNovo: HTMLImageElement | null
  ) {
    iconeAntigo.classList.toggle('d-none');
    iconeNovo?.classList.toggle('d-none');
  }

  onDelete(params: any) {
    this.produtosFiltrados.splice(params.rowData.codigo, 1);
    this.gridApi.updateRowData({ remove: [params.rowData] });
    this.gridApi.forEachNode((node: any) => {
      console.log(node.data);
    });

    return this.produtosFiltrados;
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  carregarColunas() {
    this.columnDefs = [
      {
        headerName: 'CodBarras',
        field: 'codBarras',
        width: 160,
        minWidth: 50,
        resizable: false,
        headerClass: 'ag-theme-custom-afastamento-header',
        flex: 1,
      },
      {
        headerName: 'Nome',
        field: 'nome',
        width:  380,
        headerClass: 'ag-theme-custom-afastamento-header',
      },
      {
        headerName: 'N.C.M',
        field: 'ncm', //federal e estadual
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
      },
      {
        headerName: 'CST pis/cofins', //federal
        field: 'cst',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1,
      },
      {
        headerName: 'Aliq Pis', //federal
        field: 'pis',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1,
      },
      {
        headerName: 'Aliq Cofins', //federal
        field: 'cofins',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1,
      },
      {
        headerName: 'Cod. Nat Receita', //federal
        field: 'natreceita',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1
      },
      {
        headerName: 'Cst IPI',
        field: 'cstipi', //federal
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1,
      },
      {
        headerName: 'Aliq IPI',
        field: 'aliqipi', //federal
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        hide: this.tipoImposto == 1,
      },
      {
        headerName: 'C.F.O.P',
        field: 'cfop',
        editable: true,
        width: 100,
        maxWidth: 150,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        cellClassRules: {
          'border-danger': (params) => params.value.toString()[0] != '5',
        },
        cellEditorParams: {
          useFormatter: true,
          maxLength: 4,
        },
        hide: this.tipoImposto == 2,

        valueGetter: function (params) {
          return params.data.cfop;
        },

        valueSetter: (params) => {
          const newValInt = params.newValue;

          if (isNaN(Number(newValInt))) {
            params.data.cfop = params.oldValue;

            this.toastr.error('C.F.O.P [  ' + newValInt + '  ] inválido', null, {progressBar: true});

            return false;
          }

          const valueChanged = params.data.cfop !== newValInt;

          if (valueChanged) params.data.cfop = newValInt;

          return valueChanged;
        },
      },

      {
        headerName: 'CST ICMS',
        field: 'cstIcms',
        cellEditor: 'agTextCellEditor',
        cellEditorParams: {
          useFormatter: true,
          maxLength: this.maxLengthCSTIcms(),
        },
        width: 120,
        editable: true,
        minWidth: 50,
        headerClass: 'ag-theme-custom-text-center',
        cellClassRules: {
          'border-danger': (params) =>
            this.listaCST.indexOf(params.value.toString()) == -1,
        },
        cellClass: 'text-center',

        valueGetter: function (params) {
          return params.data.cstIcms;
        },

        valueSetter: (params) => {
          var newValInt = params.newValue;
          if (isNaN(Number(newValInt))) {
            params.data.cstIcms = params.oldValue;
            this.toastr.error('CST [  ' + newValInt + '  ] inválido', null, {
              progressBar: true,
            });
            return false;
          }

          var valueChanged = params.data.cstIcms !== newValInt;
          if (valueChanged) {
            params.data.cstIcms = newValInt;
          }
          return valueChanged;
        },
        hide: this.tipoImposto == 2,
      },
      {
        headerName: 'Aliq. ICMS',
        field: 'aliqIcms',
        width: 120,
        editable: this.regimeTributario == 3,
        minWidth: 50,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        cellClassRules: { 'bg-light': (params) => this.regimeTributario == 1 },
        hide: this.regimeTributario == 1,
        valueGetter: function (params) {
          return params.data.aliqIcms + '%';
        },
      },
      {
        headerName: 'Perc. MVA',
        field: 'percMva',
        width: 120,
        editable: (params) => this.habilitarCelulaPercMVA(params.data.cstIcms),
        minWidth: 50,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: ['text-center', 'bg-light'],
        cellClassRules: {
          'bg-white': (params) =>
            this.habilitarCelulaPercMVA(params.data.cstIcms),
        },
        hide: this.tipoImposto == 2
      },
      {
        headerName: 'Perc. Red BCI',
        field: 'percRedBci',
        width: 170,
        editable: (params) =>
          params.data.cstIcms == 20 && this.regimeTributario == 3,
        minWidth: 50,
        headerClass: ['ag-theme-custom-text-center'],
        cellClass: ['text-center', 'bg-light'],
        cellClassRules: {
          'bg-white': (params) =>
            params.data.cstIcms == 20 && this.regimeTributario == 3,
        },
        hide: this.regimeTributario == 1 && this.tipoImposto == 2,
      },
      {
        headerName: '',
        width: 40,
        filter: 'agNumberColumnFilter',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onDelete.bind(this),
        },
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
      },
    ];
  }

  private habilitarCelulaPercMVA = (value: any) => {
    const listaCSTRegimeNormal = ['10', '30', '70'];
    const listaCSTSimplesNacional = ['201', '202', '203'];

    if (listaCSTRegimeNormal.indexOf(value) != -1 && this.regimeTributario == 3)
      return true;

    if (
      listaCSTSimplesNacional.indexOf(value) != -1 &&
      this.regimeTributario == 1
    )
      return true;

    return false;
  };

  verificarPrimeiroDigitoCfop(event: CellValueChangedEvent) {
    if (event.colDef.field !== 'cfop') return;

    let cfopDigitado = event.data.cfop;
    const primeiroValor = cfopDigitado[0];
    console.log(primeiroValor);

    primeiroValor == 5
      ? null
      : this.toastr.error('C.F.O.P [  ' + cfopDigitado + '  ] inválido', null, {
          progressBar: true,
        });
  }

  private listaCST = [
    '00',
    '10',
    '20',
    '30',
    '40',
    '41',
    '50',
    '51',
    '60',
    '70',
    '101',
    '102',
    '103',
    '201',
    '202',
    '203',
    '300',
    '400',
    '500',
  ];

  mostrarToastrErro(cstDigitado) {
    this.toastr.error('CST [  ' + cstDigitado + '  ] inválido', null, {
      progressBar: true,
    });
  }

  verificarCSTValido(event: CellValueChangedEvent) {
    if (event.colDef.field !== 'cstIcms') return;
    const cstDigitado = event.data.cstIcms.toString();

    this.listaCST.indexOf(cstDigitado) != -1
      ? null
      : this.toastr.error('CST [  ' + cstDigitado + '  ] inválido', null, {
          progressBar: true,
        });
  }
  selecionarTipoImposto(valor:number){
    this.tipoImposto = valor;

    valor == 1 ? this.tituloNavBar = "Alteração de impostos Estaduais" :    this.tituloNavBar = "Alteração de impostos Federais" 

    this.carregarColunas();
  }

  // futuramente vai te que criar um metodo para validar os CFOP
  // Caso o regime tributario for igual 1  ele traz o 3 digitos referente ao simples nacional
  private maxLengthCSTIcms = () => (this.regimeTributario == 1 ? 3 : 2);


}
