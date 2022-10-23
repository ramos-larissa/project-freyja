import React, {useEffect, useState} from "react";
import ProdutoService from "../../service/ProdutoService";
import Header from "../../components/Header";


export default function Main() {
    const [produtos, setProdutos] = useState([]);

    async function getData() {
        const response = await ProdutoService.list();
        setProdutos(response.data);
    }

    useEffect(() => getData(), []);

    return (
        <Header/>
    // <div>
    //     {produtos.map((produto) => (
    //         <div key={produto.ID}>
    //             {produto.username}
    //         </div>
    //     ))}
    // </div>
)
}