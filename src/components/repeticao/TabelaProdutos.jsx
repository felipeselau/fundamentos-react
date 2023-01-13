import React from "react";
import produtos from "../../data/produtos";

export default props =>{

    const td = produtos.map(i =>{
        return <tr><td>{i.id}</td><td>{i.nome}</td><td>R${i.price}</td></tr>
    })

    return(
            <table>
            <td>Id</td> <td>Produto</td> <td>Preço</td>
                {td}
            </table>

    )
}