import styled from 'styled-components'

const StyledContainer =styled.div`
    padding: ${props => props.padding};
    margin: 0;
    height: 200px;
    `
    
const Container= ({ containerClass, padding}) => {
    
    return (
        <StyledContainer className={containerClass} padding={padding}>
        </StyledContainer>
    )
}

export default Container;