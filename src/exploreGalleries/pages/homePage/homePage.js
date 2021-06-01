import React from "react";
import chat from "../../assets/chat.svg";
import notification from "../../assets/notification.svg";
import {Container} from "../../styled-components/Container";
import {InsetBox} from "../../styled-components/InsetBox";
import {InsetBoxIcon} from "../../styled-components/InsetBoxIcon";
import {Row} from "../../styled-components/Row";
import SwitchToggle from "../../styled-components/SwitchToggle";
import {CardsWrapper} from "../../styled-components/CardsWrapper";
import Card from "../../styled-components/Card";
import glass from "../../assets/glass.svg";
import diamond from "../../assets/diamond.svg";
import partEmoji from "../../assets/emoji.svg";
import frame from "../../assets/frame.svg";
import WalletCollection from "../../styled-components/WalletCollection";

const HomePage = () => {
    return (
        <Container className="mt-5">
            <InsetBox>
                <Row className="items-center justify-between">
                    <InsetBoxIcon>
                        <img src={chat} alt="icon"/>
                        <p className="left-top-tooltip">9+</p>
                    </InsetBoxIcon>
                    <SwitchToggle/>
                    <InsetBoxIcon>
                        <img src={notification} alt="icon"/>
                        <p className="right-top-tooltip">9+</p>
                    </InsetBoxIcon>
                </Row>
            </InsetBox>
            <CardsWrapper>
                <Card title="Explore" subtitle="Galleries" img={frame}/>
                <Card title="Drop" subtitle="Swipe" img={diamond}/>
                <Card title="My" subtitle="Galleries" img={partEmoji}/>
                <Card title="Schedule" subtitle="Drop" img={glass}/>
            </CardsWrapper>
            <WalletCollection/>
        </Container>
    )
}

export default HomePage