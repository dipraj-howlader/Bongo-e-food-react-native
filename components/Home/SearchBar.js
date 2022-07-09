import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchBar() {
    const ref = useRef();
    useEffect(() => {
        ref.current?.setAddressText('Some Text');
      }, []);
  return (
    <View style={{marginTop:15, flexDirection:'row',
        }}>
        <GooglePlacesAutocomplete placeholder='Search'


        styles={{
        textInput: {
            backgroundColor:'#eee',
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7
        },
        textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 12
        },
        }}
        renderLeftButton= {() =>(
            <View style={{marginLeft: 10 }}>
                <Ionicons name = "location-sharp" size ={24}/>
                </View>
        )}
        renderRightButton= {() => (
            <View style={{
                flexDirection:   'row',
                marginRight: 8,
                backgroundColor:'white',
                padding: 9,
                borderRadius: 30,
                alignItems: 'center',

            }}>
                <AntDesign name='clockcircle' size={11}r
                    style={{marginRight: 6}} />
                <Text         onPress={(data, details = null) => {
            console.log(data, details);
          }}>Search</Text>
            </View>
        )}

        />

    </View>
  )
}