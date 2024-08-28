import styled from 'styled-components'

const StyledButton =styled.button`
    padding: 0;
    margin: 0;
    `
    
const Button = ({event, btnContent, btnClass, type}) => {
    
    return (
        <StyledButton className={btnClass} onClick={event} type={type}>
            {btnContent}
        </StyledButton>
    )
}

export default Button;