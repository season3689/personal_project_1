import styled from 'styled-components'

const StyledHeader =styled.footer`
    padding: 0;
    margin: 0;
    bottom: 0;
    height: 100px;
    position: absolute;
    `
    
const Footer = ({ footerClass}) => {
    
    return (
        <div style={{position: 'relative', bottom: '0'}}>
        <StyledHeader className={footerClass}/>
        </div>
    )
}

export default Footer;