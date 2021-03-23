function iniciar(){
    var tela = screen.width;
    if(tela > 450){
        dados = infos(1);
    }else{
        dados = infos(2);
    }
    
    for (i = 1; i <= 20; i++){
        document.getElementById("img"+i).setAttribute('src', dados[i-1]["img"]);
        document.getElementById("nome"+i).innerHTML = dados[i-1]["nome_autor"];
        document.getElementById("data"+i).innerHTML = dados[i-1]["periodo"];
    }
}

function show(id){
    var sli = document.getElementById("slides");
    var tela = document.body;
    var texto = document.getElementById("texto");
    var titulo = document.getElementById("titulo");
    var img = document.getElementById("imgci");
    da = infos();
    
    sli.style.visibility = "visible";
    tela.style.visibility = "hidden";
    
    texto.innerHTML = da[id]["texto"];
    titulo.innerHTML = da[id]["nome_autor"];
    img.setAttribute('src', da[id]["img"])
}
function voltar(){
    var sli = document.getElementById("slides");
    var tela = document.body;
    sli.style.visibility = "hidden";
    tela.style.visibility = "visible";
}
function infos(d){
    var dados1 = {4 : {nome_autor : "Ada Lovelace", texto : "Ela criou um algoritmo para calcular a sequência de Bernoulli, uma dada sequência de números racionais, o algoritmo teria funcionado se a máquina de Babbage tivesse realmente sido construída, mas o projeto somente foi concluído em 2002, pelo Museu da História do Computador, em Londres.", periodo : "(1815-1852)", img : "./imgs/lin-img1.jpg"},
                 0 : {nome_autor : "George Boole", texto : "A Álgebra Booleana é um ramo que trabalha com objetos diferentes. Estudam-se proposições e seus valores de verdade em vez de variáveis e seus valores numéricos. Formalmente, a Álgebra Booleana é um sistema matemático composto por um conjunto de elementos, e que se utiliza somente de dois algarismos para representar os números ou as proposições: o zero (0) e o um (1). Esse sistema de numeração é chamado binário - de base 2 - e tem grande utilidade na Lógica e na Teoria dos Conjuntos.", periodo : "(1815-1864)", img : "./imgs/lin-img2.jpg"},
                 5 : {nome_autor : "Alan Turing", texto : "O matemático desenvolveu um sistema chamado “bombe”, para traduzir os textos secretos dos alemães, gerados por máquinas de criptografia chamadas de “Enigma”.seu grande feito foi a criação da Máquina de Turing. Uma invenção automática capaz de manipular símbolos em uma fita de acordo com uma série de regras para guardar informação, exatamente como os computadores fazem hoje em dia.", periodo : "(1910-1950)", img : "./imgs/lin-img3.jpg"},
                 1 : {nome_autor : "Irmã Mary Kenneth Keller", texto : "Participou do desenvolvimento da linguagem de programação BASIC e atuou até o momento de sua morte como cientista da computação e também como militante pela inclusão de mulheres no mundo da informática, ajudando a fundar uma associação infantil para o uso de computadores na educação.", periodo : "(1913-1985)", img : "./imgs/lin-img4.jpg"},
                 6 : {nome_autor : "Claude Elwood Shannon", texto : "Usando a Teoria das Probabilidades, Shannon mostrou como medir a quantidade de informação. Sempre dando preferência ao sistema de numeração binário, introduziu a unidade de medida de informação: o bit : binary digit.", periodo : "(1916-2001)", img : "./imgs/lin-img5.jpg"},
                 2 : {nome_autor : "John Backus", texto : "Ele junto com uma equipe criaram a linguagem FORTRAN que se tornou padrão global para a ciência e engenharia e ainda esta em uso.", periodo : "(1924-2007)", img : "./imgs/lin-img6.jpg"},
                 7 : {nome_autor : "Karen Spärck Jones", texto : "Karen começou a trabalhar em sistemas de Recuperação de Informações (IR) e introduziu a ponderação de Freqüência de Documento Inversa (IDF), estatística numérica que pondera palavras como mais ou menos importantes dentro de documentos, permitindo uma recuperação mais eficiente de informações. Este sistema ainda é usado nos motores de busca hoje.", periodo : "(1935-2007)", img : "./imgs/lin-img7.jpg"},
                 3 : {nome_autor : "Tim Berners-Lee", texto : "Desenvolveu um projeto a partir do conceito de hipertexto, visando o compartilhamento de informações entre os pesquisadores, do qual apresentou um protótipo ENQUIRE. Depois de um período fora do CERN e trabalhando em contato com redes de computadores, ele retorna em 1984, quando junta as ideias de hipertexto retomando o desenvolvimento da ideia de sistema de compartilhamento de informações global que temos hoje, a World Wide Web.", periodo : "(1955-Dias atuais)", img : "./imgs/lin-img8.jpg"},
                 14 : {nome_autor : "Pitágoras", texto : "Foi o grego Pitágoras de Samos quem demonstrou teoricamente o teorema que leva seu nome e generaliza esta relação válida para todo triângulo retângulo: O quadrado da hipotenusa é igual à soma dos quadrados dos catetos.", periodo : "(570 a.C – 495 a.C.)", img : "./imgs/lin-img9.jpg"},
                 8 : {nome_autor : "Hipócrates de Cós", texto : "Elaborou o Corpus Hipocraticum, um registro detalhado de casos e identificação de varias doenças e formas de tratamento, além de uma orientação para uma vida saudável. ele tamém os efeitos do clima e do meio ambiente na saúde e é lembrado ate hoje pelo tradicional 'Juramento Hipocratico'.", periodo : "(460 a.C.- 370 a.C.)", img : "./imgs/lin-img10.jpg"},
                 15 : {nome_autor : "Arquimedes", texto : "Além da matemática, outra ciência que se desenvolveu entre os gregos foi a mecânica, cujas bases foram dadas por Arquimedes.", periodo : "(287 a.C.- 212 a.C.)", img : "./imgs/lin-img11.jpg"},
                 9 : {nome_autor : "Nicolau Copérnico", texto : "Desenvolveu a teoria do heliocentrismo, teoria que diz que o sol é o centro da Via Lactea.", periodo : "(1473-1543)", img : "./imgs/lin-img12.jpg"},
                 16 : {nome_autor : "William Gilbert", texto : "Estuda os fenômenos elétricos e descobre as propriedadesdo ímã.", periodo : "(1544-1603)", img : "./imgs/lin-img13.jpg"},
                 10 : {nome_autor : "Galileu Galilei", texto : "Geometrizou o universo, igualando todos os espaços. Ao descobrir a ViaLáctea, contrapôs, a um mundo fechado e finito, a idéia da infinitude do céu. / empreendeu uma mudança radical no campo da óptica geométrica (lentes, reflexão e refração da luz), termologia (foi o inventor do termômetro), hidrostática, óptica física (teoria sobre a natureza da luz) e principalmente no campo da dinâmica, da qual lançou os fundamentos.", periodo : "(1564-1642)", img : "./imgs/lin-img14.jpg"},
                 17 : {nome_autor : "Von Guericke", texto : "Inventa a máquina pneumática e a máquina elétrica.", periodo : "(1602-1686)", img : "./imgs/lin-img15.jpg"},
                 11 : {nome_autor : "Blaise Pascal", texto : "Criador do barômetro e revela a existência da pressão atmosférica.", periodo : "(1623-1662)", img : "./imgs/lin-img16.jpg"},
                 18 : {nome_autor : "Christiaan Huygens", texto : "Desenvolve a teoria ondulatória da luz.", periodo : "(1629-1695)", img : "./imgs/lin-img17.jpg"},
                 12 : {nome_autor : "Isaac Newton", texto : "Teoria da Gravitação Universal, relaciona os resultados de Galileu e Descartes, e diz que: A força de atração é proporcional as massas e inversamente proporcional ao quadrado das distancias.", periodo : "(1642-1727)", img : "./imgs/lin-img18.jpg"},
                 19 : {nome_autor : "Charles Darwin", texto : "Teoria evolucionista que diz que a variação e a seleção natural são os fatores principais na origem de novas espécies.", periodo : "(1809-1882)", img : "./imgs/lin-img19.jpg"},
                 13 : {nome_autor : "Gregor Mendel", texto : "Realizou exeperiemento com ervilhas e analisou matematicamente os resultados, solucionando diverssas questões sobre a hereditariedade. ficou conhecido como o pai da genética.", periodo : "(1822-1884)", img : "./imgs/lin-img20.jpg"},};
    
    var dados2 = { 0 : {nome_autor : "Ada Lovelace", texto : "Ela criou um algoritmo para calcular a sequência de Bernoulli, uma dada sequência de números racionais, o algoritmo teria funcionado se a máquina de Babbage tivesse realmente sido construída, mas o projeto somente foi concluído em 2002, pelo Museu da História do Computador, em Londres.", periodo : "(1815-1852)", img : "./imgs/lin-img1.jpg"},
                   1 : {nome_autor : "George Boole", texto : "A Álgebra Booleana é um ramo que trabalha com objetos diferentes. Estudam-se proposições e seus valores de verdade em vez de variáveis e seus valores numéricos. Formalmente, a Álgebra Booleana é um sistema matemático composto por um conjunto de elementos, e que se utiliza somente de dois algarismos para representar os números ou as proposições: o zero (0) e o um (1). Esse sistema de numeração é chamado binário - de base 2 - e tem grande utilidade na Lógica e na Teoria dos Conjuntos.", periodo : "(1815-1864)", img : "./imgs/lin-img2.jpg"},
                   2 : {nome_autor : "Alan Turing", texto : "O matemático desenvolveu um sistema chamado “bombe”, para traduzir os textos secretos dos alemães, gerados por máquinas de criptografia chamadas de “Enigma”.seu grande feito foi a criação da Máquina de Turing. Uma invenção automática capaz de manipular símbolos em uma fita de acordo com uma série de regras para guardar informação, exatamente como os computadores fazem hoje em dia.", periodo : "(1910-1950)", img : "./imgs/lin-img3.jpg"},                            3 : {nome_autor : "Irmã Mary Kenneth Keller", texto : "Participou do desenvolvimento da linguagem de programação BASIC e atuou até o momento de sua morte como cientista da computação e também como militante pela inclusão de mulheres no mundo da informática, ajudando a fundar uma associação infantil para o uso de computadores na educação.", periodo : "(1913-1985)", img : "./imgs/lin-img4.jpg"},
                   4 : {nome_autor : "Claude Elwood Shannon", texto : "Usando a Teoria das Probabilidades, Shannon mostrou como medir a quantidade de informação. Sempre dando preferência ao sistema de numeração binário, introduziu a unidade de medida de informação: o bit : binary digit.", periodo : "(1916-2001)", img : "./imgs/lin-img5.jpg"},
                   5 : {nome_autor : "John Backus", texto : "Ele junto com uma equipe criaram a linguagem FORTRAN que se tornou padrão global para a ciência e engenharia e ainda esta em uso.", periodo : "(1924-2007)", img : "./imgs/lin-img6.jpg"},
                   6 : {nome_autor : "Karen Spärck Jones", texto : "Karen começou a trabalhar em sistemas de Recuperação de Informações (IR) e introduziu a ponderação de Freqüência de Documento Inversa (IDF), estatística numérica que pondera palavras como mais ou menos importantes dentro de documentos, permitindo uma recuperação mais eficiente de informações. Este sistema ainda é usado nos motores de busca hoje.", periodo : "(1935-2007)", img : "./imgs/lin-img7.jpg"},
                   7 : {nome_autor : "Tim Berners-Lee", texto : "Desenvolveu um projeto a partir do conceito de hipertexto, visando o compartilhamento de informações entre os pesquisadores, do qual apresentou um protótipo ENQUIRE. Depois de um período fora do CERN e trabalhando em contato com redes de computadores, ele retorna em 1984, quando junta as ideias de hipertexto retomando o desenvolvimento da ideia de sistema de compartilhamento de informações global que temos hoje, a World Wide Web.", periodo : "(1955-Dias atuais)", img : "./imgs/lin-img8.jpg"},
                   8 : {nome_autor : "Pitágoras", texto : "Foi o grego Pitágoras de Samos quem demonstrou teoricamente o teorema que leva seu nome e generaliza esta relação válida para todo triângulo retângulo: O quadrado da hipotenusa é igual à soma dos quadrados dos catetos.", periodo : "(570 a.C – 495 a.C.)", img : "./imgs/lin-img9.jpg"},
                   9 : {nome_autor : "Hipócrates de Cós", texto : "Elaborou o Corpus Hipocraticum, um registro detalhado de casos e identificação de varias doenças e formas de tratamento, além de uma orientação para uma vida saudável. ele tamém os efeitos do clima e do meio ambiente na saúde e é lembrado ate hoje pelo tradicional 'Juramento Hipocratico'.", periodo : "(460 a.C.- 370 a.C.)", img : "./imgs/lin-img10.jpg"},
                   10 : {nome_autor : "Arquimedes", texto : "Além da matemática, outra ciência que se desenvolveu entre os gregos foi a mecânica, cujas bases foram dadas por Arquimedes.", periodo : "(287 a.C.- 212 a.C.)", img : "./imgs/lin-img11.jpg"},
                   11 : {nome_autor : "Nicolau Copérnico", texto : "Desenvolveu a teoria do heliocentrismo, teoria que diz que o sol é o centro da Via Lactea.", periodo : "(1473-1543)", img : "./imgs/lin-img12.jpg"},
                   12 : {nome_autor : "William Gilbert", texto : "Estuda os fenômenos elétricos e descobre as propriedadesdo ímã.", periodo : "(1544-1603)", img : "./imgs/lin-img13.jpg"},
                   13 : {nome_autor : "Galileu Galilei", texto : "Geometrizou o universo, igualando todos os espaços. Ao descobrir a ViaLáctea, contrapôs, a um mundo fechado e finito, a idéia da infinitude do céu. / empreendeu uma mudança radical no campo da óptica geométrica (lentes, reflexão e refração da luz), termologia (foi o inventor do termômetro), hidrostática, óptica física (teoria sobre a natureza da luz) e principalmente no campo da dinâmica, da qual lançou os fundamentos.", periodo : "(1564-1642)", img : "./imgs/lin-img14.jpg"},
                   14 : {nome_autor : "Von Guericke", texto : "Inventa a máquina pneumática e a máquina elétrica.", periodo : "(1602-1686)", img : "./imgs/lin-img15.jpg"},
                   15 : {nome_autor : "Blaise Pascal", texto : "Criador do barômetro e revela a existência da pressão atmosférica.", periodo : "(1623-1662)", img : "./imgs/lin-img16.jpg"},
                   16 : {nome_autor : "Christiaan Huygens", texto : "Desenvolve a teoria ondulatória da luz.", periodo : "(1629-1695)", img : "./imgs/lin-img17.jpg"},
                   17 : {nome_autor : "Isaac Newton", texto : "Teoria da Gravitação Universal, relaciona os resultados de Galileu e Descartes, e diz que: A força de atração é proporcional as massas e inversamente proporcional ao quadrado das distancias.", periodo : "(1642-1727)", img : "./imgs/lin-img18.jpg"},
                   18 : {nome_autor : "Charles Darwin", texto : "Teoria evolucionista que diz que a variação e a seleção natural são os fatores principais na origem de novas espécies.", periodo : "(1809-1882)", img : "./imgs/lin-img19.jpg"},
                   19 : {nome_autor : "Gregor Mendel", texto : "Realizou exeperiemento com ervilhas e analisou matematicamente os resultados, solucionando diverssas questões sobre a hereditariedade. ficou conhecido como o pai da genética.", periodo : "(1822-1884)", img : "./imgs/lin-img20.jpg"},};
    if(d == 1){
        return dados1;
    }else{
        return dados2;
    }
}