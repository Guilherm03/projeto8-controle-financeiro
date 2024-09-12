let information;
let initialQuant = parseFloat(prompt("DIGITE QUANTO VOCÊ TEM :"));
let addQuantity;
let removeQuantity;

do {

    information = prompt(`Você tem disponivel: ${initialQuant} reais
       1 - Para adicionar um valor
       2 - Para remover um valor
       3 - Para sair `);
    switch (information) {
        case "1":
            addQuantity = parseFloat(prompt("Digite o valor que você deseja adicionar ao valor total:"));
            initialQuant += addQuantity;
            break;
        case "2":
            removeQuantity = parseFloat(prompt("Digite o valor que você deseja remover do valor total:"));
            initialQuant -= removeQuantity;
            break;
    }
    if (information === "3") {
        alert("O sistema está sendo encerrado...");
    }


} while (information !== "3");