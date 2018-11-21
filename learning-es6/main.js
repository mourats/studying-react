alert('Teste');

class List {
    constructor(){
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);

    }
}

class TodoList extends List{
    constructor(){
        super();
        this.usuario = "Thiago";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica { 
    static soma(a, b){
        return a + b;
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}
document.getElementById('usuario').onclick = function () {
    MinhaLista.mostraUsuario();
}
document.getElementById('soma').onclick = function () {
    const valor = Matematica.soma(10, 40);
    console.log(valor);
}