import TinderCard from "../../components/TinderCard"
import * as Style from "./style"






export default function Step4() {




  return(
    <Style.Step4body>
      <TinderCard
        name={'NomeA'}
        age={31}
        social={0}
        book={3}
        positive={false}
        img={''}
      />
      <TinderCard
        name={'NomeB'}
        age={26}
        social={8}
        book={1}
        positive={false}
        img={''}
      />
      <TinderCard
        name={'NomeC'}
        age={23}
        social={1}
        book={1}
        positive={true}
        img={''}
      />
    </Style.Step4body>
  )
}