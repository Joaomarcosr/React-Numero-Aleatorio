import React, {useState} from "react";
import "./estilo.css"

function PaginaInicial(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (101-1) + 1);
        setNumeroAleatorio(novoNumero)
    }

    return(
        <main className="main">

            <h3>Número aleatório</h3>
            <h1>{numeroAleatorio}</h1>

            <section className="area-botao">
                <label>
                    Click no botão abaixo para gerar um número aleatório:
                </label>

                <button onClick={gerarNumero}>
                    Gerar número
                </button>
            </section>


        </main>
    );
}

export default PaginaInicial;