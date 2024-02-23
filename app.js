'use strict'

const switcher = document.querySelector('#theme_btn');
var listaVazia = true;

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');

    let className = document.body.className;
    if(className == "dark-theme"){
        this.textContent = "Tema Claro";
    }
    else{
        this.textContent = "Tema Escuro";
    }

    console.log('current class name: ' + className);
});

function addTarefa(){
    var nomeTarefa = window.prompt('Digite o nome da tarefa a ser adicionada: ', '');
    var div = document.getElementById("div");

    if(listaVazia){
        div.innerHTML += "<ul id='lista'></ul>";
    }
    if(nomeTarefa != ""){
        var lista = document.getElementById("lista");
        var tarefa = document.createElement('ul');
        var check = document.createElement('input');
        var label = document.createElement('label');
        var remove_btn = document.createElement('button');
        
        check.type = 'checkbox';        
        label.textContent = nomeTarefa;
        remove_btn.className = 'remove_btn';
        remove_btn.textContent = " - "

        remove_btn.onclick = function(){
            removerTarefa(this.parentNode);
        };
        tarefa.className = 'tarefa';
        tarefa.appendChild(check);
        tarefa.appendChild(label);
        tarefa.appendChild(remove_btn);
        
        lista.appendChild(tarefa);
        document.getElementById("btn_apagar").style.display = "block";    
        listaVazia = false;
    }
}

function removerTarefa(tarefa){
    var tarefas = document.querySelectorAll('.tarefa');
    var len = tarefas.length;
    
    tarefa.remove();
    if(tarefas.length == 1){
        apagarLista();
    }
    
}

function apagarLista(){
    document.getElementById("lista").remove();
    document.getElementById("btn_apagar").style.display = "none";
    div.innerHTML += "<div id='div'></div>";

    listaVazia = true;
}

