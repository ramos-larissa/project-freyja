import TinderCard from "../../components/TinderCard"
import * as Style from "./style"
import "./styles.css"
import Profile1 from "../../assets/profiles/profile-1.jpg"
import Profile2 from "../../assets/profiles/profile-2.jpg"
import DuckPic from "../../assets/duck/book-duck.webp"

export default function Step4() {

    return (
        <Style.Step4body>
            <TinderCard
                name={'Wolfi'}
                age={31}
                social={0}
                book={3}
                positive={false}
                img={Profile1}
            />
            <TinderCard
                name={'Reina'}
                age={26}
                social={8}
                book={1}
                positive={false}
                img={Profile2}
            />
            <TinderCard
                name={'Dustrid'}
                age={27}
                social={1}
                book={1}
                positive={true}
                img={DuckPic}
            />
        </Style.Step4body>
    )
}