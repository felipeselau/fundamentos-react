export default props =>{
    const min = props.min
    const max = props.max

    let num = Math.random() * (max - min) + min
    let numInt = Math.round(num)
    console.log(num)

    return(
        <>
        <p>O número do dia é <strong>{numInt}</strong></p>
        <p>Escolhido entre os numeros {min} e {max} </p>
        </>
    )
}