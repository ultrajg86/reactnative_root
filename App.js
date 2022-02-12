import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>나만의 꿀팁</Text>
      </View>
      <View style={styles.containerMainImage}>
        <Image 
        source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}
				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
        resizeMode={"cover"} />
      </View>
      <View style={styles.containerSubTitle}>
        <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
          <Text style={styles.textStyle}>미용</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
          <Text style={styles.textStyle}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
          <Text style={styles.textStyle}>할인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
          <Text style={styles.textStyle}>기타</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerContentImage}>
          <Image
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}
            resizeMode={"cover"}
            />
        </View>
        <View style={styles.containerContentText}>
          <Text>먹다 남은 피자를 촉촉하게!</Text>
          <Text>꿀먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
          <Text>2020.09.09</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "red"
  },
  containerTitle: {
    flex:1,
    backgroundColor: "#ccc"
  },
  containerSubTitle: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  containerContent: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  containerContentImage: {
    flex: 1,
  },
  containerContentText: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  mainTitle:{
    backgroundColor: "#fff",
    fontSize: 30,
    color: "#000",
    flexDirection: "column",
    justifyContent: 'flex-end'
  },
  containerMainImage:{
    flex:1,
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  textContainer:{

  }
});