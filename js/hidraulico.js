const hidraulico = [

    {
        foto: './img/tampao-esgoto-dn600.jpg',
        codigo: '5401001146',
        busca: 'tampao',
        nome: 'Tampão articulado fofo ductil',
        material: 'Ferro fundido',
        dimensao: 'DN 600 mm',
        classe: 'D-400',
        norma: 'NBR-10160',
        marca: 'Afer',
        unidade: 'peça',
        valor: 460.00,
        cor: ' ',
        fornecedor: 'Khaleesi',
        cidade: 'São Paulo',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/tampao-agua-t05.jpg',
        codigo: '5401001144',
        busca: 'tampao',
        nome: 'Tampão articulado T-05',
        material: 'Ferro fundido',
        dimensao: ' ',
        classe: ' ',
        norma: ' ',
        marca: 'Afer',
        unidade: 'peça',
        valor: 108.00,
        cor: ' ',
        fornecedor: 'Khaleesi',
        cidade: 'São Paulo',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/valvula-bloqueio-esfera.jpg',
        codigo: '5401001980',
        busca: 'valvula',
        nome: 'Valvula de bloqueio tipo esfera 1/2"',
        material: 'latão',
        dimensao: '1/2"',
        classe: ' ',
        norma: ' ',
        marca: 'Gip',
        unidade: 'peça',
        valor: 9.00,
        cor: ' ',
        fornecedor: 'J. E. Materiais',
        cidade: 'Ribeirão Preto',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/valvula-bloqueio-esfera.jpg',
        codigo: '5401001983',
        busca: 'valvula',
        nome: 'Valvula de bloqueio tipo esfera 3/4"',
        material: 'latão',
        dimensao: '3/4"',
        classe: ' ',
        norma: ' ',
        marca: 'Gip',
        unidade: 'peça',
        valor: 7.00,
        cor: ' ',
        fornecedor: 'J. E. Materiais',
        cidade: 'Ribeirão Preto',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/valvula-bloqueio-esfera.jpg',
        codigo: '5401001980',
        busca: 'valvula',
        nome: 'Valvula de bloqueio tipo esfera 1"',
        material: 'latão',
        dimensao: '1"',
        classe: ' ',
        norma: ' ',
        marca: 'Gip',
        unidade: 'peça',
        valor: 7.00,
        cor: ' ',
        fornecedor: 'J. E. Materiais',
        cidade: 'Ribeirão Preto',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    }

]

function carregarLista() {
    let conteudo = document.getElementById('conteudo');

    for(let i = 0; i < hidraulico.length; i++){
        conteudo.innerHTML += `<div>
                                <img src=${hidraulico[i].foto}>
                                <p>Cod.: ${hidraulico[i].codigo}
                                <br>${hidraulico[i].nome}
                                <br>${hidraulico[i].material}
                                <br>Medida: ${hidraulico[i].dimensao}
                                <br>Classe: ${hidraulico[i].classe}
                                <br>Norma: ${hidraulico[i].norma}
                                <br>Marca: ${hidraulico[i].marca}
                                <br>Unidade: ${hidraulico[i].unidade}
                                <br>Preço: ${hidraulico[i].valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                                <br>Fornecedor: ${hidraulico[i].fornecedor}
                                </p>
                                </div>`;
    }
}
