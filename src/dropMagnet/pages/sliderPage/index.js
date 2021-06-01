import React from "react";
import Slider from "./Slider";
import "../../slider.scss"
import ArtGalleryCard from "../../components/card/card";
import {ConatinerCol, Container, ContainerRow, ContainerWithBackground} from "../../styled-component/container";
import {StyledTab, StyledTabs, StyledTabList, StyledTabPanel} from "../../styled-component/tabs";


const SliderPage = () => {
    const tab1List = Array.from(Array(16).keys());
    const tab2List = Array.from(Array(8).keys());
    const tab3List = Array.from(Array(11).keys());

    return (
        <div>
            <Slider/>
            <Container>
                <ContainerRow>
                    <ConatinerCol>
                        <ArtGalleryCard />
                    </ConatinerCol>
                    <ConatinerCol>
                        <ArtGalleryCard />
                    </ConatinerCol>
                    <ConatinerCol>
                        <ArtGalleryCard />
                    </ConatinerCol>
                    <ConatinerCol>
                        <ArtGalleryCard />
                    </ConatinerCol>
                </ContainerRow>
            </Container>
            <ContainerWithBackground >
                <StyledTabs>
                    <StyledTabList>
                        <StyledTab>Latest Activity 🔥</StyledTab>
                        <StyledTab>Most Followed ❤️</StyledTab>
                        <StyledTab>Feeling lucky 🍀</StyledTab>
                    </StyledTabList>

                    <StyledTabPanel>
                        <ContainerRow>
                            {
                                tab1List.map((card, index) => {
                                    return (
                                        <ConatinerCol key={index}>
                                            <ArtGalleryCard />
                                        </ConatinerCol>
                                    )
                                })
                            }
                        </ContainerRow>
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <ContainerRow>
                            {
                                tab2List.map((card, index) => {
                                    return (
                                        <ConatinerCol key={index}>
                                            <ArtGalleryCard />
                                        </ConatinerCol>
                                    )
                                })
                            }
                        </ContainerRow>
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <ContainerRow>
                            {
                                tab3List.map((card, index) => {
                                    return (
                                        <ConatinerCol key={index}>
                                            <ArtGalleryCard />
                                        </ConatinerCol>
                                    )
                                })
                            }
                        </ContainerRow>
                    </StyledTabPanel>
                </StyledTabs>

            </ContainerWithBackground>
        </div>
    )
}

export default SliderPage