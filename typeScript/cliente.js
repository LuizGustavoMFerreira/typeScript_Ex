var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="pessoa.ts"/>
var empresa;
(function (empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getCodeCliente = function () {
            return this._codCliente;
        };
        Cliente.prototype.setCodeCliente = function (codCliente) {
            this._codCliente = codCliente;
        };
        Cliente.prototype.getCredito = function () {
            return this._credito;
        };
        Cliente.prototype.setCredito = function (credito) {
            this._credito = credito;
        };
        return Cliente;
    }(empresa.Pessoa));
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
