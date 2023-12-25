import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

// Thêm tham số 'item' để nhận dữ liệu sản phẩm
const ProductItem = ({ item }) => {
    return (
        <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
            <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }} source={{ uri: item?.image }}
            />

            <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
                {item?.title}
            </Text>

            <View
                style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>${item?.price}</Text>
                <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {item?.rating?.rate} ratings
                </Text>
            </View>

            <Pressable
                onPress={() => addItemToCart(item)}
                style={{
                    backgroundColor: "#FFC72C",
                    padding: 10,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginTop: 10,
                }}
            >
                <Text>Add to Cart</Text>
            </Pressable>
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({});
