import readlinesync = require("readline-sync");
import { colors } from "./src/util/color";
import { ProdutoRepository } from "./src/repository/ProdutoRepository";
import { Produto } from "./src/model/Produto";


export function main() {

    let opcao, id, peca, preco: number;
    let nome: string;

    //Teste Aplicação
    const p1: Produto = new Produto(1, "Icons - Rádio Retrô", 906, 959.99);
    const p2: Produto = new Produto(2, "Art - A Via Láctea", 3091, 1999.99);
    
    p1.visualizar();
    p2.visualizar();
   
    while (true) {

        console.log(colors.bg.black, colors.fg.green,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("               Legoland - Sua loja de Lego           ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nLegoland - Sua loja de Lego !");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");
                peca = readlinesync.questionInt("Digite a quantidade de peças: ");
                preco = readlinesync.questionFloat("Digite o preco: R$ ");

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                //produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar Produtos - por Id\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                //produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                //let produto = produtoController.buscarNoArray(id);

                if (Produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");
                    peca = readlinesync.questionInt("Digite a quantidade de peças: ");
                    preco = readlinesync.questionFloat("Digite o preco: ");

                } else
                    console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                //produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Maria Paula");
    console.log("Generation Brasil - maria.alves@genstudents.org");
    console.log("github.com/mpaulas/generation.git");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();