import React, { use } from 'react'
import { useState } from 'react'
import "../css/style.css"

//ARRAY - catálogo
const catalogo = [
    { id: 1, nome: "Homem-Aranha: Um Novo Dia", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "A Odisseia", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Michael", preco: 30.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Toy Story 5", preco: 30.00, disponivel: true, quantidade: 0 },

];

const Ingresso = () => {
    const [items, setItems] = useState(catalogo);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);

    //Taxa de serviço
    const taxaServico = 5.00;

    const alterarQuantidade = (id, valor) => {

        setItems(prev =>
            prev.map(item =>
                item.id == id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item
            )

        )
    }

    const filmesDisponiveis = items.filter(item=>item.disponivel);
    const carrinho = item.filter(item=>item.quantidade>0);

    const subtotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade,0);
    const total = subtotal > 0 ? subtotal + taxaServico :0;
    
    return (
        <>

        </>
    )
}

export default Ingresso

export default Ingresso

