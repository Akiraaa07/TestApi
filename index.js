class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor
    }
}

async function TesteGet(){
    console.log('Inciando o teste!');
    try {
        let response = await fetch('https://apigenerator.dronahq.com/api/hVrn-n1A/carro');
        if (response.ok) {
            let carros = await response.json();
            console.log('Carros recebidos:', carros);
        } else {
            console.log('Erro na requisição:', response.status);
        } 
        console.log('Terminou a requisição!');   
    } catch (error) {
        console.log('Caiu no catch')
        console.log(error);
    }
}

async function TesteGetById(id){
    console.log('Inciando o teste do get by id!');
    try {
        let response = await fetch(`https://apigenerator.dronahq.com/api/hVrn-n1A/carro/${id}`);
        if (response.ok) {
            let carro = await response.json();
            console.log('Carros recebidos:', carro);
        } else {
            console.log('Erro na requisição:', response.status);
        } 
        console.log('Terminou a requisição!');   
    } catch (error) {
        console.log('Caiu no catch')
        console.log(error);
    }
}

async function TestePost(carro) {
    console.log('Iniciando o teste do POST!');
    try {
        let response = await fetch('https://apigenerator.dronahq.com/api/hVrn-n1A/carro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carro),
        });

        if (response.ok) {
            let novoCarro = await response.json();
            console.log('Carro criado:', novoCarro);
        } else {
            console.log('Erro na requisição:', response.status);
        }
        console.log('Terminou a requisição!');
    } catch (error) {
        console.log('Caiu no catch');
        console.log(error);
    }
}

async function TestePut(id, carro) {
    console.log("Iniciando o teste do PUT!");
    try {
        let response = await fetch(`https://apigenerator.dronahq.com/api/hVrn-n1A/carro/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carro),
        });
        if (response.ok) {
            let carroAtualizado = await response.json();
            console.log('Carro Atualizado: ', carroAtualizado);
        } else {
            console.log('Erro na requisição: ', response.status);
        }
    } catch (error) {
        console.log('Caiu no catch!');
        console.log(error)
    }
}

async function TesteDelete(id) {
    console.log("Iniciando o teste do DELETE!")
    try {
        let response = await fetch(`https://apigenerator.dronahq.com/api/hVrn-n1A/carro/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            console.log(`Carro com ID ${id} deletado com sucesso!`);
        } else {
            console.log('Erro na requisição: ', response.status);
        }
        
    } catch (error) {
        console.log('Caiu no catch!');
        console.log(error);
    }
}
