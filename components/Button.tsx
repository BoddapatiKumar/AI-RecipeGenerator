import {  ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/services/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';

const Button = ({ label, onPress,icon ,loading=false}: any) => {
  return (
   <TouchableOpacity
        style={{
          backgroundColor:Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          width: '100%',
          marginTop: 20,
          display:'flex',
          flexDirection:'row',
          gap:10,
          justifyContent:'center'
        }}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color={Colors.WHITE} /> :
        <Ionicons name={icon} size={20} color="white" />}
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit",
            color: Colors.WHITE,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
