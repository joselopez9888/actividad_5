
class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(valor: number) {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += valor;
            console.log(`Se ha depositado $${valor}. Saldo actual: $${this.cantidad}`);
        }
    }

    retirar(valor: number) {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
            return;
        }
        if (this.cantidad >= valor) {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Saldo actual: $${this.cantidad}`);
        } else {
            console.log("No hay suficiente efectivo en la cuenta.");
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}

const cuenta = new Cuenta("José López", 100, "Ahorros", "123456789");
cuenta.mostrarDatos();
cuenta.depositar(50);
cuenta.retirar(20);
cuenta.retirar(150);
