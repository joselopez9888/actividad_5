
class Cancion {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string) {
        this.autor = autor;
    }

    mostrarDatos() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}

const cancion = new Cancion("Bohemian Rhapsody", "Rock");
cancion.setAutor("Queen");
cancion.mostrarDatos();
