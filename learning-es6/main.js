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

//Array functions
const array = [1, 2, 3, 4, 5];

const dobro = (e) => e*2;

const newArray = array.map(dobro);

console.log(newArray);

const nome = () => ({nome: "Thiago"});
console.log(nome());

// Valores padrão
const soma = (a = 4, b = 6) => a + b;

console.log(soma(1)); // 7 
console.log(soma()); // 10