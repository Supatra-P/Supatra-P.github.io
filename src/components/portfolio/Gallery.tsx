import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { PortfolioData } from "../../assets/data/PortfolioData";
import { HeadTitle } from "../HeadTitle";

const ImgBox = styled.div`
    padding: 1vw;
    border-radius: 12px;
    width: 24vw;

    &:hover {
        box-shadow: 0px 0px 0px 7px var(--dBlue);
    }

    @media (max-width: 786px) {
        margin-bottom: 5vw;
        padding: 3vw;
        width: 80vw;
    }
`;

const ImgGal = styled.img`
    width: 100%;
    cursor: pointer;
    border-radius: 12px;
`;

const ImgTag = styled.a`
    text-decoration: none;
    color: var(--white);
    line-height: 1.5rem;
`;

const WhiteBoxmini = styled.div`
    width: 24px;
    height: 24px;
    background-color: var(--white);
    border-radius: 8px;

    :hover {
        box-shadow: 0px 0px 0px 1px var(--white);
    }
    
    img {
        width: 18px;
        height: 18px;
    }
`;

export function Gallery() {
    return (
        <div style={{ width: '100vw', paddingRight: '0' }}>
            <HeadTitle title='Portfolio' />
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 2 }}>
                <Masonry gutter="2vw">
                    {PortfolioData.map((port, i) => (
                        <ImgBox>
                            <a href={"https://github.com/Supatra-P/" + port.link} target="_blank" rel="noreferrer">
                                <ImgGal key={i}
                                    src={port.img}
                                    alt={port.name} />
                            </a>
                            <ImgTag href={"https://github.com/Supatra-P/" + port.link} target="_blank" rel="noreferrer">
                                <h4>{port.name}</h4>
                                <small>{port.when}</small>
                            </ImgTag>
                            <div className="flex-row gap0p2" style={{paddingTop: '.8vw'}}>
                                {port.icon.map((skill, key) => {
                                    return <a href={skill.lan.link} target="_blank"><WhiteBoxmini className="flex-c-c"><img src={skill.lan.icon} alt={skill.lan.name} /></WhiteBoxmini></a>;
                                })}
                            </div>
                        </ImgBox>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};