import { IncidenciaImposto } from "../enuns/incidencia-imposto.enum";
import { Operacao } from "../enuns/operacao.enum";

interface ICst {
    cst: string;
    descricao: string;
    operacao: Operacao;
    incidenciaImposto: IncidenciaImposto;
}

export abstract class Cst {

    static lista: ICst[] = [
        {
            
            cst: "01",
            descricao: "Operação tribrutável com Alíquota Básica",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Saida
        },
        {
            cst: "02",
            descricao: "Operação tribrutável com Alíquota Diferenciada",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Saida
        },
        {
            cst: "03",
            descricao: "operação Tributável com Alíquota por Unidade de Medida de Produto",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Saida
        },
        {
            cst: "04",
            descricao: "Operação Tributável Monofásica - Revenda a Alíquota Zero",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },
        {
            cst: "05",
            descricao: "Operação Tributável por Substituição Tributária",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },
        {
            cst: "06",
            descricao: "Operação Tributável a Alíquota Zero",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },

        {
            cst: "07",
            descricao: "Operação Isenta da Contribuição",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },
        {
            cst: "08",
            descricao: "Operação sem incidência da Contribuição",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },
        {
            cst: "09",
            descricao: " Operação com Suspensão da Contribuição.",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Saida
        },
        {
            cst: "49",
            descricao: "Outras Operações de Saída",
            incidenciaImposto: IncidenciaImposto.Depende,
            operacao: Operacao.Saida
        },
        {
            cst: "50",
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "51",
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "52",
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação.",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "53",
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação.",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "54",
            descricao: "Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "55",
            descricao: "Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "56",
            descricao: " Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "60",
            descricao: " Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "61",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "62",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "63",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "64",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "65",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "66",
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },
        {
            cst: "67",
            descricao: "Crédito Presumido - Outras Operações.",
            incidenciaImposto: IncidenciaImposto.Sim,
            operacao: Operacao.Entrada
        },

        {
            cst: "70",
            descricao: "Operação de Aquisição sem Direito a Crédito",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "71",
            descricao: "Operação de Aquisição com isenção",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "72",
            descricao: "Operação de Aquisição com Suspensão",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "73",
            descricao: "Operação de Aquisição a Alíquota Zero",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "74",
            descricao: "Operação de Aquisição sem incidência da Contribuição",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "75",
            descricao: "Operação de Aquisição por Substituição Tributária",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "98",
            descricao: "Outras Operações de Entrada",
            incidenciaImposto: IncidenciaImposto.Nao,
            operacao: Operacao.Entrada
        },
        {
            cst: "99",
            descricao: "Outras Operações",
            incidenciaImposto: IncidenciaImposto.Depende,
            operacao: Operacao.Entrada
        },
    ]

}
