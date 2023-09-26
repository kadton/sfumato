import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Text as CardText } from "react-native-paper";
import styled from "styled-components/native";
import { StyledProps } from "../../../Global/Helpers";

const GalleryCardCover = styled(Card.Cover)<StyledProps>`
  padding: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const GalleryCard = styled(Card)<StyledProps>`
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const Title = styled.Text<StyledProps>`
  padding: ${(props) => props.theme.space.md};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

interface GalleryInfoCardProps {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
}

const GalleryInfoCard = ({
  name,
  icon,
  photos,
  address,
  isOpenNow,
  rating,
}: GalleryInfoCardProps) => {
  return (
    <GalleryCard>
      <GalleryCardCover key={name} source={{ uri: `${photos[0]}` }} />
      <Title>{name}</Title>
      {/* <Card.Content>
        <CardText variant="titleLarge">Card title</CardText>
        <CardText variant="bodyMedium">Card content</CardText>
      </Card.Content> */}
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </GalleryCard>
  );
};

export default GalleryInfoCard;
