import React from "react";
import alunos  from "../../data/alunos"

export default props =>{

    const lis = alunos.map(i =>{
        return <li key={i.id}>{i.id}) {i.nome} -> {i.nota}</li>
    })
    
    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}