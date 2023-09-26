import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import GalleryInfoCard from "./Components/GalleryInfoCard";
import styled from "styled-components/native";

const name: string = "The National Gallery";
const icon: string = "path/to/icon/image.png";
const photos: string[] = [
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f6/a6.jpg",
  // ... add more paths to photos related to the gallery as required.
];
const address: string = "Trafalgar Square, London WC2N 5DN, United Kingdom";
const isOpenNow: boolean = true;
const rating: number = 4.7;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 10px;
`;

const GalleriesListContainer = styled.View`
  padding: 10px;
  flex: 1;
`;

const GalleriesScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ borderRadius: 8 }}
          elevation={1}
        />
      </SearchContainer>
      <GalleriesListContainer>
        <GalleryInfoCard
          name={name}
          icon={icon}
          photos={photos}
          address={address}
          isOpenNow={isOpenNow}
          rating={rating}
        />
      </GalleriesListContainer>
    </SafeArea>
  );
};

export default GalleriesScreen;
