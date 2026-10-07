unction cadastrar(ev) {
    //Não envie o formulario
    ev.preventDefault()
}

function buscar(ev) {
    // Buscar pelo Cep
    if(ev.key == "Enter"){
        //alert('apertou tecla buscar')

        //Variaveis que referenciam
        // os elementos do HTML
        const logradouro = document.getElementById('logradouro')
        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')  
        const estado = document.getElementById('estado')
        const uf = document.getElementById('uf')

        const cep = document.getElementById('cep')

        const url = `https://viacep.com.br/ws/${cep.value}/json/`

        fetch(url)
        .then(response => response.json())
        .then(dados => {
            logradouro.value = dados.logradouro
            bairro.value = dados.bairro
            cidade.value = dados.localidade
            estado.value = dados.uf
            uf.value = dados.uf
        })
        .catch(erro => {
            "Erro ao buscar os dados!"
        })
        
    }

}
