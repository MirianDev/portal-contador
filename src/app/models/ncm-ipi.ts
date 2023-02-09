import { Aliquota } from "../enuns/aliquota.enum";


interface INcm {
    ncm: string;
    descricao: string;
    aliquota: Aliquota;
}
export abstract class NcmIpi {

    static lista: INcm[] = [
    {    ncm: "2106.90.10",
        descricao: " Preparações compostas, não alcoólicas (extratos concentrados ou sabores concentrados), para elaboração de bebida da posição 22.02, com capacidade de diluição superior a 10 partes da bebida para cada parte do concentrado",
        aliquota: Aliquota.Ncm1
    },
    {
        ncm: "3307.49.00",
        descricao:" Outras",
        aliquota: Aliquota.Ncm2
    },
    {
        ncm: "3703.20.00",
        descricao:" Outros, para fotografia a cores (policromo)",
        aliquota: Aliquota.Ncm3
    },
    {
        ncm: "",
        descricao:" Outros, para fotografia a cores (policromo)",
        aliquota: Aliquota.Ncm4
    }

    ]
}
