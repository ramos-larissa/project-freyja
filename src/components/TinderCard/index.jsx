import { useState } from "react"
import * as Style from "./style"


export default function TinderCard({ 
  name, age, social, book, positive, img
}) {

  const [correctHovered, set_correctHovered] = useState(false)
  const [actualButton, set_actualButton] = useState('close')
  const [actualClasse, set_actualClasse] = useState('unlike')

  const [disabled, set_disabled] = useState(false)

  const onHoverButton = (order) => {
    if(order === 'toHeart'){
      set_actualButton('heart')
      set_actualClasse('like')
    }

    if(order === 'toClose'){
      set_actualButton('close')
      set_actualClasse('unlike')
    }
  }

  const handleLike = () => {
    if(!positive){
      set_disabled(true);
    }
  }

  return(
    <Style.Container disabled={disabled}>
      <Style.Header>
        <ion-icon name="settings"/>
        <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo-2012-2017.png" alt="logo" />
        <ion-icon name="chatbubbles"/>
      </Style.Header>

      <Style.WrapperTop>
        <Style.ContentImg>
          <img src={img} alt="TinderImg" />
        </Style.ContentImg>

        <Style.ContentInfos>
          <p><strong>{name}</strong>, {age}</p>
          <Style.InfoIcons>
            <div><ion-icon name="people"/> {social} </div>
            <div><ion-icon name="book"/> {book} </div>
          </Style.InfoIcons>
        </Style.ContentInfos>
      </Style.WrapperTop>
      <Style.Pappers width={'85%'} height={'3px'} />
      <Style.Pappers width={'80%'} height={'2px'} />

      <Style.WrapperBottom>
        <div className="reroll">
          <ion-icon name="refresh"/>
        </div>

        {
          positive ? 
          <div className={actualClasse}
            onMouseEnter={() => onHoverButton('toHeart')}
            onMouseLeave={() => onHoverButton('toClose')}
          >
            <ion-icon name={actualButton}/>
          </div>
          :
          <div className="unlike" onClick={handleLike}>
            <ion-icon name="close"/>
          </div>
        }

        <div className="like" onClick={handleLike}>
          <ion-icon name="heart"/>
        </div>

        <div className="location">
          <ion-icon name="location"/>
        </div>
      </Style.WrapperBottom>
    </Style.Container>
  )
}