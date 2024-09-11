const hidraulico = [

    {
        foto: './img/tampao-esgoto-dn600.jpg',
        codigo: '5401001146',
        busca: 'tampão',
        nome: 'Tampão articulado fofo ductil',
        material: 'Ferro fundido',
        dimensao: 'DN 600 mm',
        classe: 'D-400',
        norma: 'NBR-10160',
        marca: 'Afer',
        unidade: 'peça',
        valor: 460.00,
        cor: '',
        fornecedor: 'Khaleesi',
        cidade: 'São Paulo',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/tampao-agua-t05.jpg',
        codigo: '5401001144',
        busca: 'tampão',
        nome: 'Tampão articulado T-05',
        material: 'Ferro fundido',
        dimensao: '',
        classe: '',
        norma: '',
        marca: 'Afer',
        unidade: 'peça',
        valor: 108.00,
        cor: '',
        fornecedor: 'Khaleesi',
        cidade: 'São Paulo',
        prazo: '30 dias',
        vigencia: '24/05/2025',
        gestor: 'Diretor Operacional'
    },

    {
        foto: './img/tampao-agua-t05.jpg',
        codigo: '5401001144',
        busca: 'tampão',
        nome: 'Tampão articulado T-05',
        material: 'Ferro fundido',
        dimensao: '',
        classe: '',
        norma: '',
        marca: 'Afer',
        unidade: 'peça',
        valor: 108.00,
        cor: '',
        fornecedor: 'Khaleesi',
        cidade: 'São Paulo',
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
                                <p>${hidraulico[i].codigo} ${hidraulico[i].nome} ${hidraulico[i].fornecedor}</p>
                                </div>`;
    }
}
