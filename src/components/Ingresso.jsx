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
    const carrinho = items.filter(item=>item.quantidade>0);

    const subtotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade,0);
    const total = subtotal > 0 ? subtotal + taxaServico :0;

    const confirmarPedido=()=>{
        setEnviar(true);
        setStatus("Processando Pagamento...")
        setTimeout(()=>{
            setStatus("Compra Finalizada! Bom Filme!!")
            setEnviar(false)
        },4000);
    }

    return (
        <div className="container">
            <h2>Cardápio do Restaurante</h2>
            {filmesDisponiveis.map(produto => (
                <div key={produto.id} className="item-cardapio">
                    <span>{produto.nome}(R$ {produto.preco.toFixed(2)})</span>
                    <div className="item-controles">
                        <button onClick={() => alterarQuantidade(produto.id, -1)} className="btn-qtn">-</button>
                        <span>{produto.quantidade}</span>
                        <button onClick={() => alterarQuantidade(produto.id, +1)} className="btn-qtn">+</button>
                    </div>
                </div>
            ))}


            <hr className="linha" />
            <h3>Resumo da Entrega</h3>
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ):(
            <>
                <ul className="resumo-lista">
                    {carrinho.map(item => (
                        <li key={item.id}>
                            {item.quantidade} X {item.nome}-R$ {(item.preco * item.quantidade).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <p>Subtotal: R${subtotal.toFixed(2)}</p>
                <p>Taxa de Entrega: R${taxaServico.toFixed(2)}</p>
                <strong className="total">Total a pagar: R${total.toFixed(2)}</strong>

                <button className="btn-confirmar" onClick={confirmarPedido} disabled={enviar}>
                    {enviar ? "Enviando..." : "Confirmar Pedido"}
                </button>
            </>
            )}
            {status && (
                <div className="alerta-status"> 
                    <strong>Alerta:</strong>{status}
                </div>
            )}
        </div>
    )
}

export default Ingresso

