//Exercício05

//Exercício 04

function Botaozinho(){
    return(
        <>
        <label htmlFor="botao">
            <input type="button" id="botao" value="Clique aqui"
            onClick={() => alert("Botão clicado")}/>
        </label>
        </>

    )
}

export default Botaozinho;