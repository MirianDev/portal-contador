


interface INcm {
    ncm: string;
    descricao: string;
    aliquota: string;
}
export abstract class NcmIpi {
    static lista: INcm[] = [
        {
            ncm: "21069010",
            descricao: " Preparações compostas, não alcoólicas (extratos concentrados ou sabores concentrados), para elaboração de bebida da posição 22.02, com capacidade de diluição superior a 10 partes da bebida para cada parte do concentrado",
            aliquota: "8"
        },
        {
            ncm: "33074900",
            descricao: " Outras",
            aliquota: "22"
        },
        {
            ncm: "37032000",
            descricao: " Outros, para fotografia a cores (policromo)",
            aliquota: "15" 
        },
        {
            ncm: "38089411",
            descricao: " Que contenham bromometano (brometo de metila) ou bromoclorometano",
            aliquota: "5"
        },
        {
            ncm: "38089411",
            descricao: "Ex 01 - Com propriedades acessórias odoríferas ou desodorizantes de ambientes, apresentados em embalagem tipo aerossol",
            aliquota: "30" 
        },
        {
            ncm: "38089419",
            descricao: "Outros",
            aliquota: "5" 
        },
        {
            ncm: "38089419",
            descricao: "Ex 01 - Com propriedades acessórias odoríferas ou desodorizantes de ambientes, apresentados em embalagem tipo aerossol",
            aliquota: "30" 
        },
        {
            ncm: "38275100",
            descricao: "-- Que contenham trifluorometano (HFC-23)",
            aliquota: "10" 
        },  
         {
            ncm: "38275900",
            descricao: "-- Outras",
            aliquota: "10" 
            
        }, 
          {
            ncm: "38276100",
            descricao: "-- Que contenham, em massa, 15 % ou mais de 1,1,1-trifluoroetano (HFC-143a)",
            aliquota: "10"
        },  
         {
            ncm: "38276200",
            descricao: "-- Outras, não mencionadas na subposição acima, que contenham, em massa, 55 % ou mais de pentafluoroetano (HFC-125), mas que não contenham derivados fluorados não saturados dos hidrocarbonetos acíclicos (HFO)",
            aliquota: "10" 
        }, 
          {
            ncm: "38276300",
            descricao: "-- Outras, não mencionadas nas subposições acima, que contenham, em massa, 40 % ou mais de pentafluoroetano (HFC-125)",
            aliquota: "10" 
        }, 
          {
            ncm: "38276400",
            descricao: "-- Outras, não mencionadas nas subposições acima, que contenham, em massa, 30 % ou mais de 1,1,1,2-tetrafluoroetano (HFC-134a), mas que não contenham derivados fluorados não saturados dos hidrocarbonetos acíclicos (HFO)",
            aliquota: "10" 
        },
           {
            ncm: "38276500",
            descricao: "-- Outras, não mencionadas nas subposições acima, que contenham, em massa, 20 % ou mais de difluorometano (HFC-32) e 20 % ou mais de pentafluoroetano (HFC 125)",
            aliquota: "10" 
        }, 
          {
            ncm: "38276800",
            descricao: "-- Outras, não mencionadas nas subposições acima, que contenham substâncias das subposições 2903.41 a 2903.48",
            aliquota: "10" 
        }, 
          {
            ncm: "38276900",
            descricao: "-- Outras",
            aliquota: "10" 
        },  
         {
            ncm: "39019090",
            descricao: "Outros",
            aliquota: "5"
        },  
         {
            ncm: "40114000",
            descricao: "- Do tipo utilizado em motocicletas",
            aliquota: "15" 
        },
           {
            ncm: "40115000",
            descricao: "- Do tipo utilizado em bicicletas",
            aliquota: "15" 
        }, 
          {
            ncm: "40132000",
            descricao: "- Do tipo utilizado em bicicletas",
            aliquota: "15" 
        },
           {
            ncm: "59061000",
            descricao: "- Fitas adesivas de largura não superior a 20 cm",
            aliquota: "5" 
        }, 
          {
            ncm: "70191400",
            descricao: "-- Mantas (mats) consolidadas mecanicamente",
            aliquota: "10" 
        }, 
          {
            ncm: "70191500",
            descricao: "-- Mantas (mats) consolidadas quimicamente",
            aliquota: "10"     
        }, 
          {
            ncm: "70191900",
            descricao: "-- Outros",
            aliquota: "10" 
        }, 
          {
            ncm: "73151210",
            descricao: "De transmissão",
            aliquota: "15" 
        }, 
          {
            ncm: "82122010",
            descricao: "Lâminas",
            aliquota: "12" 
        },  
         {
            ncm: "84072190",
            descricao: "Outros",
            aliquota: "5" 
        },
           {
            ncm: "84151090",
            descricao: "Outros",
            aliquota: "20" 
        },
          {
            ncm: "84221100",
            descricao: "-- Do tipo doméstico",
            aliquota: "20" 
        }, 
          {
            ncm: "84229010",
            descricao: "De máquinas de lavar louça, de uso doméstico",
            aliquota: "20" 

        },
           {
            ncm: "84433232",
            descricao: "De transferência térmica de cera sólida (por exemplo, solid ink e dye sublimation)",
            aliquota: "15" 
        }, 
          {
            ncm: "84433299",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "84705090",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "84713011",
            descricao: "De peso inferior a 350 g, com tela de área não superior a 140 cm2",
            aliquota: "15" 
        },
        {
            ncm: "84713019",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "84713090",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "84715020",
            descricao: "De média capacidade, podendo conter no máximo uma unidade de entrada e outra de saída da subposição 8471.60, com capacidade de instalação, dentro do mesmo gabinete, de unidades de memória da subposição 8471.70, podendo conter múltiplos conectores de expansão (slots), e valor FOB superior a US$ 12.500,00, mas não superior a US$ 46.000,00, por unidade",
            aliquota: "15" 
        },
        {
            ncm: "84715030",
            descricao: "De grande capacidade, podendo conter no máximo uma unidade de entrada e outra de saída da subposição 8471.60, com capacidade de instalação interna, ou em módulos separados do gabinete do processador central, de unidades de memória da subposição 8471.70, e valor FOB superior a US$ 46.000,00, mas não superior a US$ 100.000,00, por unidade",
            aliquota: "15" 
        },
        {
            ncm: "84715040",
            descricao: "De muito grande capacidade, podendo conter no máximo uma unidade de entrada e outra de saída da subposição 8471.60, com capacidade de instalação interna, ou em módulos separados do gabinete do processador central, de unidades de memória da subposição 8471.70, e valor FOB superior a US$ 100.000,00, por unidade",
            aliquota: "15"  
        },
        {
            ncm: "84715090",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "84719014",
            descricao: "Digitalizadores de imagens (scanners)",
            aliquota: "15" 
        },
        {
            ncm: "84729010",
            descricao: "Distribuidores (dispensadores) automáticos de notas (papéis-moeda), incluindo os que efetuam outras operações bancárias",
            aliquota: "15" 
        },
        {
            ncm: "84732910",
            descricao: "Circuitos impressos com componentes elétricos ou eletrônicos, montados, para caixas registradoras",
            aliquota: "15"     
        },
        {
            ncm: "84732990",
            descricao: "Outros",
            aliquota: "15"     
        },
        {
            ncm: "84733042",
            descricao: "Placas (módulos) de memória com uma superfície inferior ou igual a 50 cm2",
            aliquota: "15"    
        },
        {
            ncm: "85423120",
            descricao: " Montados, próprios para montagem em superfície (SMD - Surface Mounted Device)",
            aliquota: "2" 
        },
        {
            ncm: "85423190",
            descricao: "Outros",
            aliquota: "2" 
        },
        {
            ncm: "84733049",
            descricao: "Outros",
            aliquota: "15" 
        },
        {
            ncm: "85249100",
            descricao: "-- De cristais líquidos",
            aliquota: "10" 
        },
        {
            ncm: "85249200",
            descricao: "-- De diodos emissores de luz orgânicos (OLED)",
            aliquota: "10" 
        },
        {
            ncm: "85249900",
            descricao: "-- Outros",
            aliquota: "10" 
        },
        {
            ncm: "84734070",
            descricao: "Outras partes e acessórios das máquinas dos itens 84729010 ou 84729020",
            aliquota: "10" 
        },
        {
            ncm: "84735010",
            descricao: "Circuitos impressos com componentes elétricos ou eletrônicos, montados",
            aliquota: "15" 
        },
        {
            ncm: "84735090",
            descricao: "Outros",
            aliquota: "10" 
        },
        {
            ncm: "85011029",
            descricao: "Outros",
            aliquota: "10" 
        },
        {
            ncm: "85044010",
            descricao: " Carregadores de acumuladores",
            aliquota: "5" 
        },
        {
            ncm: "85044029",
            descricao: "Outros",
            aliquota: "5" 
        },
        {
            ncm: "85044030",
            descricao: "Conversores de corrente contínua",
            aliquota: "15" 
        },
        {
            ncm: "85079090",
            descricao: "Outras",
            aliquota: "15" 
        },
        {
            ncm: "85099000",
            descricao: " - Partes",
            aliquota: "10" 
            
        },
        {
            ncm: "85115090",
            descricao: "Outros",
            aliquota: "15" 
        },
        {
            ncm: "85163100",
            descricao: "-- Secadores de cabelo",
            aliquota: "20" 
        },
        {
            ncm: "85163200",
            descricao: "-- Outros aparelhos para arranjos do cabelo",
            aliquota: "20" 
        },
        {
            ncm: "85169000",
            descricao: "- Partes",
            aliquota: "10" 
        },
        {
            ncm: "85169000",
            descricao: "Ex 01 - De fogões de cozinha",
            aliquota: "5" 
        },
        {
            ncm: "85176130",
            descricao: "De telefonia celular",
            aliquota: "15" 
        },
        {
            ncm: "85176241",
            descricao: "Com capacidade de conexão sem fio",
            aliquota: "15" 
        },
        {
            ncm: "85176256",
            descricao: "Interfones",
            aliquota: "10" 
        },
        {
            ncm: "85176259",
            descricao: "Outros",
            aliquota: "15"    
        },
        {
            ncm: "85176262",
            descricao: "De tecnologia celular",
            aliquota: "15" 
        },
        {
            ncm: "85176272",
            descricao: " De frequência inferior a 15 GHz e de taxa de transmissão inferior ou igual a 34 Mbit/s, exceto os interfones",
            aliquota: "15" 
        },
        {
            ncm: "85176273",
            descricao: "Interfones",
            aliquota: "10" 
        },
        {
            ncm: "85176277",
            descricao: " Outros, de frequência inferior a 15 GHz",
            aliquota: "15"     
        },
        {
            ncm: "85176279",
            descricao: "Outros",
            aliquota: "15" 
        },
        {
            ncm: "85182100",
            descricao: "-- Alto-falante (altifalante) único montado na sua caixa (coluna)",
            aliquota: "15" 
        },
        {
            ncm: "85182200",
            descricao: " -- Alto-falantes (altifalantes) múltiplos montados na mesma caixa (coluna)",
            aliquota: "15" 
        },
        {
            ncm: "85184000",
            descricao: "- Amplificadores elétricos de audiofrequência",
            aliquota: "15" 
        },
        {
            ncm: " 85189090",
            descricao: " Outras",
            aliquota: "15" 
        },
        {
            ncm: "85219000",
            descricao: "- Outros",
            aliquota: "15" 
        },
        {
            ncm: "85219000",
            descricao: "Ex 01 - Aparelhos de reprodução de imagem e som em disco por meio óptico ou optomagnético",
            aliquota: "25" 
        },
        {
            ncm: "85234910",
            descricao: "Para reprodução apenas do som",
            aliquota: "15" 
        },
        {
            ncm: "85258912",
            descricao: "Com sensor de imagem a semicondutor tipo CCD, de mais de 490 x 580 elementos de imagem (pixels) ativos, sensíveis a intensidades de iluminação inferiores a 0,20 lux",
            aliquota: "20" 
        },
        {
            ncm: "85258919",
            descricao: "Outras",
            aliquota: "20" 
        },
        {
            ncm: "85271300",
            descricao: "-- Outros aparelhos combinados com um aparelho de gravação ou de reprodução de som",
            aliquota: "20" 
        },
        {
            ncm: "85272900",
            descricao: "-- Outros",
            aliquota: "10" 
        },
        {
            ncm: "85286200",
            descricao: "-- Capazes de serem conectados diretamente a uma máquina automática para processamento de dados da posição 8471 e concebidos para serem utilizados com esta máquina",
            aliquota: "15" 
        },
        {
            ncm: " 85299012",
            descricao: "Circuitos impressos com componentes elétricos ou eletrônicos, montados",
            aliquota: "15" 
        },
        {
            ncm: "85311090",
            descricao: "Outros",
            aliquota: "15" 
        },
        {
            ncm: "85423229",
            descricao: "Outras",
            aliquota: "5" 
        },
        {
            ncm: "87111000",
            descricao: "- Com motor de pistão de cilindrada não superior a 50 cm3",
            aliquota: "35"  
        },
        {
            ncm: "87112090",
            descricao: "Outros",
            aliquota: "35" 
        },
        {
            ncm: "87116000",
            descricao: "- Com motor elétrico para propulsão",
            aliquota: "35" //
        },
        {
            ncm: "87119000",
            descricao: "- Outros",
            aliquota: "35" 
        },
        {
            ncm: "89033100",
            descricao: "-- De comprimento não superior a 7,5 m",
            aliquota: "10" 
        },
        {
            ncm: "89033200",
            descricao: "-- De comprimento superior a 7,5 m, mas não superior a 24 m",
            aliquota: "10" 
        },
        {
            ncm: "89033300",
            descricao: "-- De comprimento superior a 24 m",
            aliquota: "10"            
            
        },
        {
            ncm: "90183219",
            descricao: "Outras",
            aliquota: "8" 
        },
        {
            ncm: "90269010",
            descricao: "De instrumentos e aparelhos para medida ou controle do nível",
            aliquota: "15" 
        },
        {
            ncm: "90283011",
            descricao: "Digitais",
            aliquota: "15" 
        },
        {
            ncm: "91021190",
            descricao: "Outros",
            aliquota: "20" 

        },
        {
            ncm: "91021210",
            descricao: "Com caixa de metal comum",
            aliquota: "20" 
        },
        {
            ncm: "91021900",
            descricao: "-- Outros",
            aliquota: "20" 
        },
        {
            ncm: "91022100",
            descricao: "-- De corda automática",
            aliquota: "20" 
        },
        {
            ncm: "94051990",
            descricao: "Outros",
            aliquota: "15"  
        },
        {
            ncm: "95044000",
            descricao: "- Cartas de jogar",
            aliquota: "10" 
        },
        {
            ncm: "95045000",
            descricao: "- Consoles e máquinas de jogos de vídeo, exceto os classificados na subposição 950430",
            aliquota: "20" 
        },
        {
            ncm: "96081000",
            descricao: " - Canetas esferográficas",
            aliquota: "20" 
        },
        {
            ncm: " 96131000",
            descricao: "- Isqueiros de bolso, a gás, não recarregáveis",
            aliquota: "40" 
        },
        {
            ncm: " 96170020",
            descricao: "Partes",
            aliquota: "15" 
   
        },
        {
            ncm: "22029900",
            descricao: "Ex 05 - Bebidas alimentares à base ou elaboradas a partir de matérias-primas vegetais classificadas nas posições 08.01 ou 08.02, no Capítulo 10 ou no Capítulo 12, exceto a posição 12.01, que não contenham leite animal, produtos lácteos ou gorduras deles derivados em sua composição",
            aliquota: "0" 
        },

    ]
}