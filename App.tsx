import React from "react";
import { StatusBar } from "expo-status-bar";
import GalleriesScreen from "./src/Features/Galleries/GalleriesScreen";

export default function App() {
  return (
    <>
      <GalleriesScreen />
      <StatusBar style="auto" />
    </>
  );
}
