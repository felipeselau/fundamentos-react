import './styles/Card.css'

export default props => {
    return(
        <div className='Card'>
            <div className='Title'>{props.titulo}</div>
            <p className='Content'>{props.children}</p>
        </div>
    )
}