import styled from 'styled-components'

const StyledInput =styled.input`
    padding: 0;
    margin: 0;
    `
    
const Input= ({type, inputPlaceholder, inputClass}) => {
    
    return (
        <StyledInput className={inputClass} type={type} placeholder={inputPlaceholder}/>
    )
}

export default Input;