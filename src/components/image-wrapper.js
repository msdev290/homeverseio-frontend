import styled from 'styled-components';

export default function Image ({ src, alt = "image", draggable = false, style, onClick, className="homeverse.io", id, onLoad }) {

    return(
            <Wrapper id={id}  src={src} className={className} alt={`homeverse.io-${alt}`} draggable={draggable} style={style} onLoad={onLoad} onClick={onClick} />
    )
}

const Wrapper = styled.img`
    max-width:100%;
    height:auto;
`
