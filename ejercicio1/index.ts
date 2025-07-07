
class CabeceraPagina {
    titulo: string;
    color: string;
    fuente: string;
    alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'center';
    }

    establecerAlineacion(alineacion: 'left' | 'center' | 'right') {
        this.alineacion = alineacion;
    }

    imprimir() {
        document.body.innerHTML = `<h1 style="color: ${this.color}; font-family: ${this.fuente}; text-align: ${this.alineacion};">${this.titulo}</h1>`;
    }
}

const cabecera = new CabeceraPagina('Mi Página', 'blue', 'Arial');
cabecera.imprimir();
cabecera.establecerAlineacion('right');
cabecera.imprimir();
