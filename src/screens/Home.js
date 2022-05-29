import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import Text from "../components/text/Text";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Details");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/images/logo.png")} />
      </View>

      <View style={styles.deliveryItem}>
        <ScrollView>
          <View style={styles.contentWrap}>
            <View style={styles.deliveryLogo}>
              <Image source={require("../../assets/images/box.png")} />
            </View>
            <View>
              <Text style={styles.headingText} preset="h1">
                Non-Contact Deliveries
              </Text>
            </View>
            <View>
              <Text style={styles.desText}>
                When placing an order, select the option “Contactless delivery”
                and the courier will leave your order at the door.
              </Text>
            </View>
            <Pressable onPress={handlePress}>
              <View style={styles.orderBtn}>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontFamily: "fontMedium",
                  }}
                >
                  Order Now
                </Text>
              </View>
            </Pressable>
            <Text style={styles.dismissText}>dismiss</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  logo: {
    width: 63,
    height: 63,
    backgroundColor: "#CDFFB6",
    borderRadius: 63,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 25px rgba(39, 1, 88, 0.2)",
    marginTop: spacing[16],
    marginLeft: spacing[5],
    marginBottom: 180,
  },
  contentWrap: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[5],
  },

  deliveryItem: {
    backgroundColor: colors.grey,
    flex: 1,
    justifyContent: "flex-end",
    borderTopStartRadius: spacing[5],
    borderTopRightRadius: spacing[5],
  },
  deliveryLogo: {
    width: 104,
    height: 104,
    borderRadius: 104,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing[6],
  },
  headingText: {
    textAlign: "center",
    color: colors.primary,
    marginBottom: spacing[6],
  },
  desText: {
    textAlign: "center",
    color: colors.secondery,
  },
  orderBtn: {
    textAlign: "center",
    backgroundColor: colors.green,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[14],
    borderRadius: spacing[2],
    marginTop: spacing[12],
    width: "100%",
  },
  dismissText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.secondery,
    marginTop: spacing[8],
  },
});
