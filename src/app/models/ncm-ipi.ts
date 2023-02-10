import { Aliquota } from "../enuns/aliquota.enum";


interface INcm {
    ncm: string;
    descricao: string;
    aliquota: string;
}
export abstract class NcmIpi {
    static lista: INcm[] = [
        {
            ncm: "2106.90.10",
            descricao: " Preparações compostas, não alcoólicas (extratos concentrados ou sabores concentrados), para elaboração de bebida da posição 22.02, com capacidade de diluição superior a 10 partes da bebida para cada parte do concentrado",
            aliquota: "8"
        },
        {
            ncm: "3307.49.00",
            descricao: " Outras",
            aliquota: "22"
        },
        {
            ncm: "3703.20.00",
            descricao: " Outros, para fotografia a cores (policromo)",
            aliquota: "15" //exemplo de como modificar os dados do ENUM aliquota.enum.ts
        },
        {
            ncm: "",
            descricao: " Outros, para fotografia a cores (policromo)",
            aliquota: "5"
        }

    ]
}
