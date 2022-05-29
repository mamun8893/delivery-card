import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import Text from "../components/text/Text";
import { AntDesign } from "@expo/vector-icons";

export default function Details() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={require("../../assets/images/product.png")} />
        </View>
        <View style={styles.productDetails}>
          <View>
            <ScrollView>
              <View style={styles.productInfo}>
                <Text style={styles.productName} preset="h2">
                  Boston Lettuce
                </Text>
                <View style={styles.priceWrap}>
                  <Text style={styles.productPrice} preset="h2">
                    1.10
                  </Text>
                  <Text style={styles.smallPrice}>€ / piece</Text>
                </View>

                <Text style={styles.grPrice}>~ 150 gr / piece</Text>
                <Text preset="h3" style={styles.country}>
                  Spain
                </Text>
              </View>

              <View style={styles.productDescription}>
                <Text style={styles.desText}>
                  Lettuce is an annual plant of the daisy family, Asteraceae. It
                  is most often grown as a leaf vegetable, but sometimes for its
                  stem and seeds. Lettuce is most often used for salads,
                  although it is also seen in other kinds of food, such as
                  soups, sandwiches and wraps; it can also be grilled.
                </Text>
              </View>
              <View style={styles.cartFavorite}>
                <View>
                  <AntDesign name="hearto" size={20} color={colors.secondery} />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productDetails: {
    justifyContent: "flex-end",
    backgroundColor: colors.white,
    borderTopStartRadius: spacing[4],
    borderTopEndRadius: spacing[4],
    marginTop: -100,
    paddingTop: spacing[9],
    paddingHorizontal: spacing[5],
    paddingBottom: 80,
  },
  productInfo: {},
  productName: {
    color: colors.primary,
    marginBottom: spacing[4],
  },
  priceWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing[2],
  },
  productPrice: {
    color: colors.primary,
  },
  smallPrice: {
    color: "#9586A8",
    marginLeft: spacing[2],
  },
  grPrice: {
    color: colors.green,
    marginBottom: spacing[8],
  },

  country: {
    color: colors.primary,
    marginBottom: spacing[4],
  },
  desText: {
    color: colors.secondery,
    marginBottom: spacing[15],
  },

  productDescription: {},
  cartFavorite: {},
});
