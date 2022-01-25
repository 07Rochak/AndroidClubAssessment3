import { View, StyleSheet, SafeAreaView, Text, StatusBar, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

export default function App () {
  const [count, setcount] = useState(0)
  const onPressAdd = () => setcount(prevCount => prevCount + 1)
  const onPressSub = () => setcount(prevCount => prevCount - 1)
  const onPressRes = () => setcount(prevCount => 0)
  return (
    <>
      <StatusBar
        backgroundColor='#FFE27A'
        color='black'
        barStyle='dark-content'
      />
      <SafeAreaView style={styles.basic}>
        <View style={styles.appHeading}><Text style={styles.app}>Android Club Assessment 3</Text></View>
        <View style={styles.container}>
          <Text style={styles.heading}>Counter Application</Text>
          <Text style={styles.desc}>The count is:</Text>
          <Text style={styles.descCount}>{count}</Text>
        </View>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Choose Operation:</Text>
          <TouchableHighlight
            style={styles.buttonAdd}
            underlayColor='#4227D4'
            onPress={onPressAdd}
          >
            <Text style={styles.buttonTextAdd}>Increment</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonSub}
            onPress={onPressSub}
            underlayColor='#4227D4'
          >
            <Text style={styles.buttonTextSub}>Decrement</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonRes}
            onPress={onPressRes}
            underlayColor='#5AE058'
          >
            <Text style={styles.buttonTextRes}>Reset</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 300,
    width: '90%',
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: 20,
    elevation: 20,
    shadowColor: '#0016FF',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 0.7,
    borderRadius: 39
  },
  heading: {
    position: 'relative',
    bottom: 50,
    fontSize: 25,
    fontWeight: 'bold'
  },
  appHeading: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: 14
  },
  basic: {
    height: '100%',
    backgroundColor: '#FFE27A'
  },
  app: {
    color: 'black',
    position: 'relative',
    justifyContent: 'center',
    top: '5%',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 19,
    paddingBottom: 15,
    fontWeight: 'bold'
  },
  buttonAdd: {
    color: 'white',
    backgroundColor: '#2800FF',
    width: '55%',
    padding: '6%',
    marginLeft: '23%'
    // position: 'relative',
    // bottom: '10%'
  },
  buttonView: {
    position: 'relative',
    top: '13.3%',
    color: 'white',
    width: '90%',
    height: '41%',
    marginLeft: '5%',
    borderRadius: 10,
    elevation: 12,
    shadowColor: '#0016FF',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 0.7,
    backgroundColor: 'white',
    padding: '9%'
  },
  buttonTextAdd: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19
  },
  buttonSub: {
    color: 'white',
    backgroundColor: '#7258FF',
    width: '55%',
    padding: '6%',
    marginTop: '5%',
    marginLeft: '23%'
    // position: 'relative',
    // bottom: '10%'
  },
  buttonTextSub: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19
  },
  buttonRes: {
    color: 'white',
    backgroundColor: '#5BFF58',
    width: '55%',
    padding: '6%',
    marginTop: '5%',
    marginLeft: '23%'
    // position: 'relative',
    // bottom: '10%'
  },
  buttonTextRes: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18
  },
  desc: {
    fontSize: 30
  },
  descCount: {
    fontSize: 30,
    padding: '5%'
  }
})
