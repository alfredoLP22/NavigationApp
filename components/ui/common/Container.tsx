import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import stylesGlobal from "@/styles/globalStyle";

const Container = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={stylesGlobal.container}>{children}</SafeAreaView>;
};

export default Container;
