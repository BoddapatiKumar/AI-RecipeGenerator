import { UserContext } from "@/context/UserContext";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import { Marquee } from "@animatereactnative/marquee";
import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Landing() {
  const { signIn, signOut, isAuthenticated } = useLogto();
  const { getIdTokenClaims } = useLogto();
  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then(async (userData) => {
        console.log(userData);

        if (userData?.email) {
          const result = GlobalApi.getUserByEmail(userData?.email);
          console.log((await result).data.data); //to get strapi data in response
          if (!(await result).data.data) {
            //Insert new Record
            const data = {
              email: userData?.email,
              name: userData?.name,
              picture: userData?.picture,
            };

            const response = await GlobalApi.createUser(data);
            console.log(response?.data?.data);
            setUser(response?.data?.data);
            router.replace("/(tabs)/Home");
          } else {
            setUser((await result)?.data?.data[0]);
            router.replace("/(tabs)/Home");
          }
        }
      });
    }
  }, [isAuthenticated]);

  const imageList = [
    require("./../assets/images/1.jpg"),
    require("./../assets/images/2.jpg"),
    require("./../assets/images/3.jpg"),
    require("./../assets/images/4.jpg"),
    require("./../assets/images/5.jpg"),
    require("./../assets/images/6.jpg"),
    require("./../assets/images/c1.jpg"),
    require("./../assets/images/c2.jpg"),
    require("./../assets/images/c3.jpg"),
  ];

  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.7}
          style={{
            transform: [{ rotate: "-4deg" }],
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.4}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 15,
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.5}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 15,
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <View
          style={{
            backgroundColor: Colors.WHITE,
            height: "100%",
            padding: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-Bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Cookmate AI 🥗🔍 | Find, Create & Enjoy Delicious Recipes!
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GRAY,
              marginTop: 10,
            }}
          >
            Generate delicious recipees in seconds with the power of AI!! 🍔✨
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => signIn("exp://192.168.1.11:8082")}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit",
                color: Colors.WHITE,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          {/* <Button title="Sign out" onPress={async () => signOut()} /> */}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    width: 300,
    marginLeft: 20,
    marginTop: 30,
  },
});
