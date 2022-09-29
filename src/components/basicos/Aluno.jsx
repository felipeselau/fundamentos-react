export default function Aluno(props){

    let status;
    if(props.nota < 7){
        status = "Reprovado(a)"
    }else{
        status = "Aprovado(a)"
    }
    return(
        <>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.nome} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e está
                <strong> {status}</strong>
            </p>
        </>
    )
}