import React from "react"
import comment from "../../assets/comment.png"
import bell from "../../assets/bell.png"
import {Container} from "../../styled-components/Container";
import {InsetBox} from "../../styled-components/InsetBox";
import {InsetBoxIcon} from "../../styled-components/InsetBoxIcon";
import {Row} from "../../styled-components/Row";
import SwitchToggle from "../../styled-components/SwitchToggle";
import {CardsWrapper} from "../../styled-components/CardsWrapper";
import Card from "../../styled-components/Card";
import glass from "../../assets/glass.png";
import diamond from "../../assets/diamond.png"
import WalletCollection from "../../styled-components/WalletCollection";

const HomePage = () => {
    return (
        <Container className="mt-5">
            <InsetBox>
                <Row className="items-center justify-between">
                    <InsetBoxIcon>
                        <img src={comment} alt="icon"/>
                        <p className="left-top-tooltip">9+</p>
                    </InsetBoxIcon>
                    <SwitchToggle/>
                    <InsetBoxIcon>
                        <img src={bell} alt="icon"/>
                        <p className="right-top-tooltip">9+</p>
                    </InsetBoxIcon>
                </Row>
            </InsetBox>
            <CardsWrapper>
                <Card title="Explore" subtitle="Galleries" img={glass}/>
                <Card title="Drop" subtitle="Swipe" img={diamond}/>
                <Card title="My" subtitle="Galleries" img={diamond}/>
                <Card title="Schedule" subtitle="Drop" img={glass}/>
            </CardsWrapper>
            <WalletCollection/>
        </Container>
    )
}

export default HomePage