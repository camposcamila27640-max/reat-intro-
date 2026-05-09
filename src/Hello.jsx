function Hello({name = "NI"}) { //DEFINIÇÃO DA FUNÇÃO
    return (
        <>
            <main>
                <h1>Seja bem-vindo, {name}!</h1>  
            </main>
        </>
    )
}

export default Hello;


//propriedade foi enviada do main, criação do objeto - (atomic desig VER O SITE)
//Dentro da propriedade (props)
// O que for escrito dentro das { é uma expressão}
//VER sobre COMPONETE 