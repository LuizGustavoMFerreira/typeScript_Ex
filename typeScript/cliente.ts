///<reference path="pessoa.ts"/>
namespace empresa
{
    export class Cliente extends Pessoa
    {
        private _codCliente:number;
        private _credito:number;

        public getCodeCliente()
        {
            return this._codCliente;
        }

        public setCodeCliente(codCliente:number)
        {
            this._codCliente = codCliente;
        }

        public getCredito()
        {
            return this._credito;
        }

        public setCredito(credito:number)
        {
            this._credito = credito;
        }
    }
}