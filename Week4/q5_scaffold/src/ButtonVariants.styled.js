import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    border: ${(props) => (props.filled ? "none" : "2px solid #333")};  
    background-color: ${(props) => props.filled ? props.bg: "transparent"};
    color: ${(props) => props.filled ? props.color: "#333"};
`;
