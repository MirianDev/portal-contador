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
  CellValueChangedEvent, ColDef
} from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { BotaoExcluirCellComponent } from 'src/app/botao-excluir-cell/botao-excluir-cell.component';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { ProdutosService } from 'src/app/core/produtos.service';
import { Operacao } from 'src/app/enuns/operacao.enum';
import { RegimeTributario } from 'src/app/enuns/regime-tributario.enum';
import { TipoImposto } from 'src/app/enuns/tipo-imposto.enum';
import { CstIpi } from 'src/app/models/cst-ipi';
import { CstPisCofins } from 'src/app/models/cst-PisCofins';
import { Empresa } from 'src/app/models/empresa';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-impostos-estaduais',
  templateUrl: './impostos-estaduais.component.html',
  styleUrls: ['./impostos-estaduais.component.scss'],
})
export class ImpostosEstaduaisComponent implements OnInit, AfterViewInit {
  private regimeTributario!: number;
  private gridApi: any;
  public tipoImposto: number;
  public valorSimples: 53;
  public industria:boolean;
  //public check: any;


  tituloNavBar: string;
  produtosFiltrados: Produto[] = [];
  queryField = new FormControl();
  frameworkComponents: any;
  produtos: Produto[] = [];
  columnDefs: ColDef[] = [];

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  @ViewChild('simplesNacional') simplesNacionalInpt!: ElementRef<HTMLInputElement>;
  @ViewChild('regimeNormal') regimeNormalInpt!: ElementRef<HTMLInputElement>;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService
  ) {
    this.frameworkComponents = {
      buttonRenderer: BotaoExcluirCellComponent,
    };

    this.tituloNavBar = "Alteração de impostos Estaduais";
  }

  async ngOnInit() { 
    const empresaSelecionada = this.localStorageService.getItem('empresaSelecionada') as Empresa;
    
    console.log(empresaSelecionada);

    this.regimeTributario = empresaSelecionada.regimeTributario;
    this.industria = empresaSelecionada.industria;
  }

  ngAfterViewInit() {
    this.produtosService.getAll().subscribe((res: any) => {
      this.produtos = res;
      this.produtosFiltrados = res;

    });

    // this.route.queryParams.subscribe((params: any) => {
    //   this.regimeTributario = params.regimeTributario;
    //   this.industria = params.industria;
      
    // });

    if (this.regimeTributario == RegimeTributario.SimplesNacional)
      this.simplesNacionalInpt.nativeElement.checked = true;
    else this.regimeNormalInpt.nativeElement.checked = true;


    this.tipoImposto = TipoImposto.Estadual;

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
        width: 380,
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
        editable: this.tipoImposto == TipoImposto.Federal,

      },
      {
        headerName: 'CST pis/cofins', //federal
        field: 'cst',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        cellEditor: 'agSelectCellEditor', // transforma em SELECT
        cellEditorParams: {
          values: CstPisCofins.lista.filter(l=> l.operacao == Operacao.Saida).map(l => l.cst),
        },
        hide: this.tipoImposto == TipoImposto.Estadual,
        editable: true,
      },
      {
        headerName: 'Aliq Pis', //federal 
        field: 'pis',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: ['text-center', 'bg-light'],
        hide: this.tipoImposto == TipoImposto.Estadual,
        editable: (params) => params.data.cst == "02",
        cellClassRules: { 'bg-light': (params) => params.data.cst != "02" },
      },
      {
        headerName: 'Aliq Cofins', //federal
        field: 'cofins',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        cellEditor: 'agTextCellEditor', // transforma em SELECT
        
        // cellEditorParams: {
        //   valueGetter: function (params) {
        //     return params.data.cofins;
        //   },
        //   valueSetter: (params) => {
        //     var newValInt = params.newValue;
        //     var valueChanged = params.data.cofins !== newValInt;
        //     if (valueChanged) {
        //       params.data.cofins = newValInt; 
        //       return valueChanged;
        //     }
        //   },    
        // } ,

        hide: this.tipoImposto == TipoImposto.Estadual,
        //cellClassRules: { 'bg-light': (params) => this.regimeTributario == RegimeTributario.SimplesNacional },
        editable: (params) => params.data.cst == "02",
        cellClassRules: { 'bg-light': (params) => params.data.cst != "02" },
      },
      {
        headerName: 'Cod. Nat Receita', //federal
        field: 'natreceita',
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',       
        cellEditor: 'agSelectCellEditor', // transforma em SELECT
        hide: this.tipoImposto == TipoImposto.Estadual,
        editable: true
      },
      {
        headerName: 'Cst IPI',
        field: 'cstipi', //federal
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: ['text-center', 'bg-light'],
        cellEditor: 'agSelectCellEditor', // transforma em SELECT
        hide: this.tipoImposto == TipoImposto.Estadual ||  this.industria == false,
        //editable: true
      },
      {
        headerName: 'Aliq IPI',
        field: 'aliqipi', //federal
        width: 100,
        maxWidth: 150,
        minWidth: 10,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: ['text-center', 'bg-light'],
        cellEditor: 'agTextCellEditor', // transforma em SELECT
        hide: this.tipoImposto == TipoImposto.Estadual || this.industria == false
    //    editable: true,
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
        hide: this.tipoImposto == TipoImposto.Federal,

        valueGetter: function (params) {
          return params.data.cfop;
        },

        valueSetter: (params) => {
          const newValInt = params.newValue;

          if (isNaN(Number(newValInt))) {
            params.data.cfop = params.oldValue;

            this.toastr.error('C.F.O.P [  ' + newValInt + '  ] inválido', null, { progressBar: true });

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
        hide: this.tipoImposto == TipoImposto.Federal , 
      },
      {
        headerName: 'Aliq. ICMS',
        field: 'aliqIcms',
        width: 120,
        editable: this.regimeTributario == RegimeTributario.RegimeNormal,
        minWidth: 50,
        headerClass: 'ag-theme-custom-text-center',
        cellClass: 'text-center',
        cellClassRules: { 'bg-light': (params) => this.regimeTributario == RegimeTributario.SimplesNacional },
        hide: this.regimeTributario != RegimeTributario.RegimeNormal || this.tipoImposto == TipoImposto.Federal, 
        valueGetter: function (params) {
          return params.data.aliqIcms + '%';  // tem 2 condições, ele vê pelo regime tributario
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
        hide: this.tipoImposto == TipoImposto.Federal
      },
      {
        headerName: 'Perc. Red BCI',
        field: 'percRedBci',
        width: 170,
        editable: (params) =>
          params.data.cstIcms == 20 && this.regimeTributario == RegimeTributario.RegimeNormal,
        minWidth: 50,
        headerClass: ['ag-theme-custom-text-center'],
        cellClass: ['text-center', 'bg-light'],
        cellClassRules: {
          'bg-white': (params) =>
            params.data.cstIcms == 20 && this.regimeTributario == RegimeTributario.RegimeNormal,
        },
        hide: this.tipoImposto == TipoImposto.Federal,
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

    if (listaCSTRegimeNormal.indexOf(value) != -1 && this.regimeTributario == RegimeTributario.RegimeNormal)
      return true;

    if (
      listaCSTSimplesNacional.indexOf(value) != -1 &&
      this.regimeTributario == RegimeTributario.SimplesNacional
    )
      return true;

    return false;
  };

  // private habilitarIndustria = (value:any) =>{
  //   const industria = ['1']
  //   const normal = ['2']

  //   if (industria.indexOf(value)!= -1 && this.)
  // }

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
  selecionarTipoImposto(valor: number) {
    this.tipoImposto = valor;

    valor == TipoImposto.Estadual ? this.tituloNavBar = "Alteração de impostos Estaduais" : this.tituloNavBar = "Alteração de impostos Federais"

    this.carregarColunas();
  }

  // futuramente vai te que criar um metodo para validar os CFOP
  // Caso o regime tributario for igual 1  ele traz o 3 digitos referente ao simples nacional
  private maxLengthCSTIcms = () => (this.regimeTributario == RegimeTributario.SimplesNacional ? 3 : 2);


}
