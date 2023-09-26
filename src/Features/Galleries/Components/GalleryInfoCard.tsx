import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Text as CardText } from "react-native-paper";
import styled from "styled-components/native";

const GalleryCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: "#fff";
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
    <Card>
      <GalleryCardCover key={name} source={{ uri: `${photos[0]}` }} />
      <Card.Title title={name} />
      {/* <Card.Content>
        <CardText variant="titleLarge">Card title</CardText>
        <CardText variant="bodyMedium">Card content</CardText>
      </Card.Content> */}
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default GalleryInfoCard;
