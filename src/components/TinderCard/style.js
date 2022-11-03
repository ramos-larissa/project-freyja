import styled from "styled-components";




export const Container = styled.div`
  user-select: none;
  background-color: white;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: 1s;

  transform: ${(props) => props.disabled ? 'translateY(100vh)' : 'translateY(0)'};
`


export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 45px;

  img{
    max-height: 45px;
  }

  ion-icon{
    font-size: 1.5em;
    cursor: pointer;
    color: silver;
  }
`

export const WrapperTop = styled.div`
  outline: 1px solid silver;
  border-radius: 5px;
`

export const ContentImg = styled.div`
  width: 250px;
  min-width: 240px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
`

export const ContentInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  /* outline: 1px solid silver; */

  p{
    padding: 0;
    margin: 0;
    width: 100%;
  }
`

export const Pappers = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-right: 1px solid silver;
  border-left: 1px solid silver;
  border-bottom: 1px solid silver;
  border-radius: 0 0 4px 4px;
`

export const InfoIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  color: silver;


  ion-icon{
    transform: translateY(3px);
  }
`

export const WrapperBottom = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  gap: 4px;

  div{
    outline: 5px solid silver;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.25s;

    &:hover{
      background-color: rgba(200, 200, 200, 0.5);
    }
  }

  .reroll{
    width: 35px;
    height: 35px;
    color: #f3d85c;
    font-size: 1.5em;
  }
  .unlike{
    width: 55px;
    height: 55px;
    color: #c60606;
    font-size: 3.5em;
  }
  .like{
    width: 55px;
    height: 55px;
    color: #73d698;
    font-size: 2.5em;
  }
  .location{
    width: 35px;
    height: 35px;
    color: #5c83f3;
    font-size: 1.5em;
  }
`