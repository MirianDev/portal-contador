
interface ICstIpi {
    cst: string;
    descricao: string;
}

export class CstIpi {
    static lista: ICstIpi[] = [
        {
            cst: "0",
            descricao: " Entrada com Recuperação de Crédito",
        },
        {
            cst: "1",
            descricao: " Entrada Tributável com Alíquota Zero",
             
        },
        {
            cst: "2",
            descricao: " Entrada Isenta",
    
        },
        {
            cst: "3",
            descricao: " Entrada Não-Tributada",
	
        },

        {
            cst: "4",
            descricao: " Entrada Imune",
            	
        },
        {
            cst: "5",
            descricao: " Entrada com Suspensão",
            	
        },
        {
            cst: "49",
            descricao: " Outras Entradas",
            	
        },
        {
            cst: "50",
            descricao: "Saída Tributada",
            	
        },
    ]
}