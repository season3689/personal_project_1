import styled from 'styled-components'


const StyledHeader =styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0px;
    background-color: orange;
    `

const Header= ({ headerClass}) => {
    
    return (<>
    <div>
        <StyledHeader className={headerClass}>
            <div>DM lee</div>
            <div>menu1</div>
            <div>menu2</div>
            <div>menu3</div>
            <div>menu4</div>
        </StyledHeader>
    </div>
    </>)
}

export default Header;