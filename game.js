/*Projeto 4 - Jogo de Ficção Interativa.
O projeto já deve estar com as funcionalidades bem implementadas, revise se ele atende a todos os requisitos 
(objetos, funções, condicionais, for, while...)
Faça os ajustes e validações necessárias para ele funcionar perfeitamente:
As perguntas estão funcionando e alterando as variáveis corretamente?
As condições que irão usar essas variáveis estão funcionando?
As funções estão sendo chamadas na hora correta e alterando as variáveis certas?
O controle de tempo está funcionando?*/

//Prologo

const prompt = require('prompt-sync')();

console.log("Pesadelo");
console.log(
    "Estava a caminho do trabalho noturno e como sempre preciso pegar o metrô, mas nesse dia algo estava tenebroso e sombrio era uma sexta-feira 13 de lua sangrenta."
);
console.log(
    "Chegando na estação notei um cara esquisito, mas não dei muita bola pra ele não, continuei meu caminho, seguindo ao trem que eu precisava embarcar."
);
console.log(
    "O trem chegou, sentei e aguardei a saida, mas o trem não saia, mais de meia hora e nada."
);
console.log(
    "Me levantei, não tinha quase ninguém na estação, fui procurar o condutor do trem, mas ele havia desaparecido, não havia ninguém nos vagões."
);

let escolhaUsuario = parseInt(
    prompt(
        "O que você decidirá? Você irá procurar o condutor? Digite 1 / ou irá ficar sentado no banco até que alguém apareça? Digite 2"
    )
);

// function escolhaUsuario(O que você decidirá? Você irá procurar o condutor? Digite 1 / ou irá ficar sentado no banco até que alguém apareça? Digite 2){
//     return parseInt(prompt(mensagem))

if (escolhaUsuario == 1) {
    //cena 1 caminho1
    console.log(
        "Fui em busca do condutor, que estranho essa hora e ninguém na estação? Continuei minha empreitada tentando achar o condutor, fui em vários lugares e nada, quando de novo avistei aquele cara, será que ele era o condutor? Só tinha ele na estação e quem mais seria senão o maquinista? Bem fui até ele para perguntar a que horas sairia o trêm, quando de repente levei o maior susto, ele tinha a pele toda deformada e mal conseguia falar, sai correndo e virei no primeiro corredor. Chegando nesse corredor avistei uma porta e nela estava escrito administração, resolvi bater na porta, uma voz diz “quem é”? Disse que era um passageiro e perguntei o que estava acontecendo, porque o trêm não saia da estação, porque que estava tudo fechado, e não tinha ninguém exceto nós três pelo menos até o momento?  A funcionaria disse que não iria abrir a porta e que tinha um doido na estação com um gancho que tinha atacado ela."
    );
    if 
}
else if 
escolhaUsuario = 
    parseInt(
        prompt(
            "Você insiste para ela abrir a porta para conversar melhor com ela?  DIGITE 1 ou irá se proteger desse maluco. DIGITE 2"
        )
    );

if (escolhaUsuario == 2) {
    //cena 1 caminho2
    console.log(
        "Suspirei e fui sentar-me até que o trem partisse dei uma cochilada e nada do trem partir, ué não é aquele cara que estava na porta de entrada da estação? Que cara estranho, ele tinha algo nas mãos."
    );
    escolhaUsuario =
        parseInt(
            prompt(
                "Você permanecerá sentado? DIGITE 1 ou sairá do trem para procurar o condutor DIGITE 2?"
            )
        );
}

if (escolhaUsuario == 1) {
    //cena 2 caminho1
    console.log(
        "A funcionária esta muito assustada e não deixa você entrar, sua única opção é se proteger."
    );
} else if (escolhaUsuario == 2) {
    //cena 2 caminho1
    console.log(
        "Você deixa a funcionária e diz a ela se precisasse de algo estaria por perto, e continua sua busca por algo para se proteger. Mais adiante avistei outra porta só que esta é reforçada e a placa esta escrito Segurança, porém a porta não estava trancada."
    );
    escolhaUsuario =
        parseInt(
            prompt(
                "Você entra na sala para pegar algo para se proteger? DIGITE 1 ou olhará as câmeras de segurança? DIGITE 2?"
            )
        );
}
if (escolhaUsuario == 2) {
    //cena 2 caminho1 opção 1
    console.log(
        "O maluco sai correndo em sua direção e golpeia a sua cabeça. Você fica desacordado e ao acordar o maluco fala que você é a noiva dele e que terão muitos filhos. Você esta amarrado sobre uma tábua e uma serra esta no meio de suas partes intimas. O maluco liga a serra e parte você ao meio. Você morreu! Tente jogar novamente."
    );
} else if (escolhaUsuario == 2) {
    //cena 2 caminho 2 opção 2 forçada
    console.log(
        "Fui em busca do condutor, que estranho essa hora e ninguém na estação? Continuei minha empreitada tentando achar o condutor, fui em vários lugares e nada, quando de novo avistei aquele cara, será que ele era o condutor? Só tinha ele na estação e quem mais seria senão o maquinista? Bem fui até ele para perguntar a que horas sairia o trêm, quando de repente levei o maior susto, ele tinha a pele toda deformada e mal conseguia falar, sai correndo e virei no primeiro corredor. Chegando nesse corredor avistei uma porta e nela estava escrito administração, resolvi bater na porta, uma voz diz “quem é”? Disse que era um passageiro e perguntei o que estava acontecendo, porque o trêm não saia da estação, porque que estava tudo fechado, e não tinha ninguém exceto nós três pelo menos até o momento?  A funcionaria disse que não iria abrir a porta e que tinha um doido na estação com um gancho que tinha atacado ela."
    );
    escolhaUsuario =
        parseInt(
            prompt(
                "Você insiste para ela abrir a porta para conversar melhor com ela?  DIGITE 1 ou irá se proteger desse maluco. DIGITE 2"
            )
        );
}

if (escolhaUsuario == 1) {
    //cena3 caminho 1
    console.log(
        "Você vasculha a sala e encontra um teaser de choque e um cassetete. O que você levará?"
    );
    escolhaUsuario =
        parseInt(
            prompt(
                "Levará o teaser de choque? DIGITE 1 ou Você decide levar o cassetete? DIGITE 2?"
            )
        );
} else if (escolhaUsuario == 2) {
    //cena 3 caminho 1 opção 1
    console.log(
        "A funcionária esta muito assustada e não deixa você entrar, sua única opção é se proteger."
    );
} else if (escolhaUsuario == 2) {
    //cena 3 caminho2 forçada
    console.log(
        "Você deixa a  funcionária e diz a ela se precisasse de algo estaria por perto, e continua sua busca por algo para se proteger. Mais adiante avistei outra porta só que esta é reforçada e a placa esta escrito Segurança, porém a porta não estava trancada."
    );
    escolhaUsuario =
        parseInt(
            prompt(
                "Você entra na sala para pegar algo para se proteger? DIGITE 1 ou olhará as câmeras de segurança? DIGITE 2?"
            )
        );
}

    if (escolhaUsuario == 1) {
    //cena 4 caminho 1 opção 2 forçada
    console.log(
        "Você caminha até a plataforma onde esta o trêm e se depara com o maquinista que esta desacordado, você imediatamente tenta acorda-lo, porém você ouve um grito, você se vira e é o maluco correndo em sua direção, você pega imediatamente seu cassetete. Teste sua sorte."
    );    
    }
    if (escolhaUsuario == 2) {
    //cena 4 caminho 2 opção 2 forçada
    console.log(
        "Você caminha até a plataforma onde esta o trêm e se depara com o maquinista que esta desacordado, você imediatamente tenta acorda-lo, porém você ouve um grito, você se vira e é o maluco correndo em sua direção, você pega imediatamente seu cassetete. Teste sua sorte."
    );
    console.log(
        "Teste de sorte. Consiste em um Jogo de cara ou coroa com 3 rodadas."
    );
    jogar()}
if (escolhaUsuario == 1) {
    //cena 5 caminho 1 opção Sorte
    console.log(
        "Você desvia do golpe do maluco e acerta um golpe no cara que fica desacordado, acorda o maquinista e segue seu destino para o trabalho."
    );
} else if (escolhaUsuario == 2) {
    //cena 5 caminho 1 opção Não Sorte
    console.log(
        "A sorte não estava ao seu lado! Você caminha até a plataforma onde esta o trêm e se depara com o maquinista que esta desacordado, você imediatamente tenta acorda-lo, porém você ouve um grito, você se vira e é o maluco correndo em sua direção, você pega imediatamente seu teaser de choque, quando você aciona o gatilho a arma falha, ela estava descarregada, você recebe um golpe na sua cabeça e fica desacordado ao acordar o maluco fala que você é a noiva dele e que terão muitos filhos. Você esta amarrado sobre uma tabua e uma serra esta no meio das suas partes intimas. O maluco liga a serra e parte você ao meio. Você morreu! Tente jogar novamente."
    );
}

console.log(
    "Finalmente você chega no Hospital onde trabalha, a viagem foi longa e muito dificil, pelo menos o trabalho esta indo bem, na maior tranquilidade."
);
console.log(
    "Você vai até a recepção tomar um café com toda a noite costuma a fazer, mas quem vem lá na maca, não era rosto desconhecido."
);
console.log(
    "Você sente um frio na espinha, era o maluco da estação e esta na sua frente."
);
console.log("Atualização em breve!");
console.log("Obrigado por jogar!");


console.log("DLC")
console.log("Protagonista terá que sobreviver, ao maluco estilo Jogos Mortais. Será que ele sobreviverá até ao amanhecer?")
console.log("DLC em desenvolvimento!")



//Jogo do Cara e Coroa

var cara = 0;
var coroa = 0;
function jogar() {
    var flag = Math.floor(Math.random() * 2);
    jogadas++;
    switch (flag) {
        case 0:
            coroa++;
            break;
        case 1:
            cara++;
            break;
        default:
    }

}

jogar();


if (cara == 1) {
    //cena 5 caminho 1 opção Sorte
    console.log(
        "Você desvia do golpe do maluco e acerta um golpe no cara que fica desacordado, acorda o maquinista e segue seu destino para o trabalho."
    );

    console.log(
        "Finalmente você chega no Hospital onde trabalha, a viagem foi longa e muito dificil, pelo menos o trabalho esta indo bem, na maior tranquilidade."
    );
    console.log(
        "Você vai até a recepção tomar um café com toda a noite costuma a fazer, mas quem vem lá na maca, não era rosto desconhecido."
    );
    console.log(
        "Você sente um frio na espinha, era o maluco da estação e esta na sua frente."
    );
    console.log("Atualização em breve!");
    console.log("Obrigado por jogar!");
} else if (coroa == 1) {
    //cena 5 caminho 1 opção Não Sorte
    console.log(
        "A sorte não estava ao seu lado! Você caminha até a plataforma onde esta o trêm e se depara com o maquinista que esta desacordado, você imediatamente tenta acorda-lo, porém você ouve um grito, você se vira e é o maluco correndo em sua direção, você pega imediatamente seu teaser de choque, quando você aciona o gatilho a arma falha, ela estava descarregada, você recebe um golpe na sua cabeça e fica desacordado ao acordar o maluco fala que você é a noiva dele e que terão muitos filhos. Você esta amarrado sobre uma tabua e uma serra esta no meio das suas partes intimas. O maluco liga a serra e parte você ao meio. Você morreu! Tente jogar novamente."
    );
    return
}