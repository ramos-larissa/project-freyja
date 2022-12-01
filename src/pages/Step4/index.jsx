import TinderCard from "../../components/TinderCard"
import * as Style from "./style"
import "./styles.css"
import Profile1 from "../../assets/profiles/profile-1.jpg"
import Profile2 from "../../assets/profiles/profile-2.jpg"
import DuckPic from "../../assets/duck/book-duck.webp"
import Panda from "../../assets/panda/panda-inlove.jpg"

export default function Step4() {

    return (
        <div id="step4">
            <div className="header-step4">
                <img src={Panda}/>
                <p className="text-header-step4">
                    <p>I'm trying to make new friends, get to know a little more about norwegian culture.</p>
                    <p>I think I forgot to tell you, I want to know Norway! Every day I'm more sure it's a country I
                        want to live in.</p>
                    <p>Can you help me with tinder? </p>
                </p>
            </div>
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
        </div>

    )
}