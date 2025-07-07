
abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        } else {
            console.log("No es mayor de edad.");
        }
    }

    abstract mostrarDatosPersonales(): void;
}

class Empleado extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0;
    }

    cargarSueldo(sueldo: number) {
        this.sueldo = sueldo;
    }

    imprimirSueldo() {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatosPersonales() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const empleado = new Empleado("José", "López", "San Miguel", "1234-5678", 25);
empleado.mostrarDatosPersonales();
empleado.esMayorDeEdad();
empleado.cargarSueldo(1200);
empleado.imprimirSueldo();
