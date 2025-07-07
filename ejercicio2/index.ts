
class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo.");
        }
        if (n === 0) {
            return 1;
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calculadora = new Calculadora();
console.log(`Suma: ${calculadora.sumar(5, 3)}`);
console.log(`Resta: ${calculadora.restar(5, 3)}`);
console.log(`Multiplicación: ${calculadora.multiplicar(5, 3)}`);
console.log(`División: ${calculadora.dividir(6, 3)}`);
console.log(`Potencia: ${calculadora.potencia(2, 3)}`);
console.log(`Factorial: ${calculadora.factorial(5)}`);
