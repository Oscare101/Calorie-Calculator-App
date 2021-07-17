import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'

const width = Dimensions.get('window').width

export default function App() {
  const [gender, setGender] = useState('')
  const [mcolor, setMcolor] = useState('')
  const [fcolor, setFcolor] = useState('')
  const [heightValue, setHeightValue] = useState()
  const [ageValue, setAgeValue] = useState()
  const [weightValue, setWeightValue] = useState()
  const [s0color, setS0color] = useState('')
  const [s1color, setS1color] = useState('')
  const [s2color, setS2color] = useState('')
  const [s3color, setS3color] = useState('')
  const [activity, setActivity] = useState('')
  const [calirie, setCalirie] = useState('')

  const heightChanged = (height) => {
    let newText = ''
    let numbers = '0123456789'

    for (var i = 0; i < height.length; i++) {
      if (numbers.indexOf(height[i]) > -1) {
        newText = newText + height[i]
      } else {
        // your call back function
        ToastAndroid.show('please enter numbers only', ToastAndroid.LONG)
      }
    }
    setHeightValue(newText)
  }

  const ageChanged = (age) => {
    let newText = ''
    let numbers = '0123456789'

    for (var i = 0; i < age.length; i++) {
      if (numbers.indexOf(age[i]) > -1) {
        newText = newText + age[i]
      } else {
        // your call back function
        ToastAndroid.show('please enter numbers only', ToastAndroid.LONG)
      }
    }
    setAgeValue(newText)
  }

  const weightChanged = (weight) => {
    let newText = ''
    let numbers = '0123456789'

    for (var i = 0; i < weight.length; i++) {
      if (numbers.indexOf(weight[i]) > -1) {
        newText = newText + weight[i]
      } else {
        // your call back function
        ToastAndroid.show('please enter numbers only', ToastAndroid.LONG)
      }
    }
    setWeightValue(newText)
  }

  const func = () => {
    if ((gender, heightValue, ageValue, weightValue, activity)) {
      let cal
      switch (gender) {
        case 'male':
          cal = 88.36 + 13.4 * weightValue + 4.8 * heightValue - 5.7 * ageValue
          break
        case 'female':
          cal = 447.6 + 9.2 * weightValue + 3.1 * heightValue - 4.3 * ageValue
          break
      }

      switch (activity) {
        case 0:
          cal = cal * 1.2
          break
        case 1:
          cal = cal * 1.375
          break
        case 2:
          cal = cal * 1.55
          break
        case 3:
          cal = cal * 1.725
          break
      }
      setCalirie(Math.floor(cal))
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inColl}>
          <View style={styles.inLine}>
            <Ionicons name="male-female-sharp" size={24} color="black" />
            <Text>Choose your gender</Text>
          </View>
          <View style={styles.inLine}>
            <TouchableOpacity
              onPress={() => {
                setFcolor('#00000000')
                setMcolor('#e88')
                setGender('male')
              }}
            >
              <View style={[styles.gView, { backgroundColor: mcolor }]}>
                <FontAwesome5 name="male" size={24} color="black" />
                <Text>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFcolor('#e88')
                setMcolor('#00000000')
                setGender('female')
              }}
            >
              <View style={[styles.gView, { backgroundColor: fcolor }]}>
                <FontAwesome5 name="female" size={24} color="black" />
                <Text>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inColl}>
          <View style={styles.inLine}>
            <MaterialCommunityIcons
              name="human-male-height-variant"
              size={24}
              color="black"
            />
            <Text> Enter your height</Text>
          </View>
          <TextInput
            autoCompleteType="off"
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="your height"
            value={heightValue}
            onChangeText={(text) => heightChanged(text)}
            maxLength={3}
          />
        </View>

        <View style={styles.inColl}>
          <View style={styles.inLine}>
            <FontAwesome5 name="magic" size={24} color="black" />
            <Text> Enter your age</Text>
          </View>
          <TextInput
            autoCompleteType="off"
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="your age"
            value={ageValue}
            onChangeText={(text) => ageChanged(text)}
            maxLength={3}
          />
        </View>

        <View style={styles.inColl}>
          <View style={styles.inLine}>
            <FontAwesome5 name="weight" size={24} color="black" />
            <Text> Enter your weight</Text>
          </View>
          <TextInput
            autoCompleteType="off"
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="your weight"
            value={weightValue}
            onChangeText={(text) => weightChanged(text)}
            maxLength={3}
          />
        </View>

        <View style={styles.inColl}>
          <View style={styles.inLine}>
            <MaterialIcons name="sports-handball" size={24} color="black" />
            <Text> Choose your activity</Text>
          </View>

          <View style={styles.inLine}>
            <TouchableOpacity
              onPress={() => {
                setS1color('#00000000')
                setS2color('#00000000')
                setS3color('#00000000')
                setS0color('#e88')
                setActivity(0)
              }}
            >
              <View style={[styles.sView, { backgroundColor: s0color }]}>
                <Text style={styles.big}>0</Text>
                <Text style={styles.smal}>times a week</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setS0color('#00000000')
                setS2color('#00000000')
                setS3color('#00000000')
                setS1color('#e88')
                setActivity(1)
              }}
            >
              <View style={[styles.sView, { backgroundColor: s1color }]}>
                <Text style={styles.big}>1-2</Text>
                <Text style={styles.smal}>times a week</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setS1color('#00000000')
                setS0color('#00000000')
                setS3color('#00000000')
                setS2color('#e88')
                setActivity(2)
              }}
            >
              <View style={[styles.sView, { backgroundColor: s2color }]}>
                <Text style={styles.big}>3-5</Text>
                <Text style={styles.smal}>times a week</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setS1color('#00000000')
                setS2color('#00000000')
                setS0color('#00000000')
                setS3color('#e88')
                setActivity(3)
              }}
            >
              <View style={[styles.sView, { backgroundColor: s3color }]}>
                <Text style={styles.big}>6-7</Text>
                <Text style={styles.smal}>times a week</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => func()}>
        <View style={styles.button}>
          <MaterialCommunityIcons name="food-apple" size={24} color="black" />
          <Text>Calculate</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inColl}>
        <Text style={styles.out}>{calirie} Kilocalories a day</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f88',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inColl: {
    width: width * 0.95,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b88',
    borderStyle: 'dashed',
    margin: 5,
  },
  gView: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  },
  input: {
    alignSelf: 'center',
    borderColor: '#b88',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 1,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  sView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 2,
    borderRadius: 10,
  },
  big: {
    fontSize: 30,
  },
  smal: {
    fontSize: 13,
    color: '#444',
  },
  out: {
    fontSize: 24,
  },
  button: {
    width: width * 0.95,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8888',
    borderRadius: 10,
    flexDirection: 'row',
  },
})
