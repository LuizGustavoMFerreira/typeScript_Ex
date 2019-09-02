///<reference path="pessoa.ts"/>
///<reference path="cliente.ts"/>
///<reference path="funcionario.ts"/>
var empresa;
(function (empresa) {
    var cliente = new empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodeCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
})(empresa || (empresa = {}));
