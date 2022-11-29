import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

export default function Start() {
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image souce={require("../../assets/icons/logo.png")}/>
                <Text>
                    Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
                </Text>
                </View>
            </ScrollView>
        </View>
    )
}