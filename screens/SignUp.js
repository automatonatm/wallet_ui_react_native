import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Platform
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios'


import {icons, images, COLORS, SIZES, FONTS} from "../constants";



const SignUp = ({navigation}) => {

    const [showPassword, setShowPassword] = React.useState(false)
    const [areas, setAreas] = React.useState(null)
    const [selectedArea, setSelectedArea] = React.useState([])
    const [modalVisible, setModalVisible] = React.useState(null)

    useEffect(  () => {
            axios.get('https://restcountries.eu/rest/v2/all')
                .then(({data}) => {

                    let areaData = data.map(item => {
                        return {
                            code: item.alpha2Code,
                            name:item.name,
                            callingCode:  `+${item.callingCodes[0]}`,
                            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                        }
                    })

                    setAreas(areaData)


                    if(areaData.length > 0) {
                        let defaultData = areaData.filter(a => a.code === 'NG')


                        if(defaultData.length > 0) {
                            setSelectedArea(defaultData[0])
                        }

                    }


                })

                .catch(e => console.log(e))


    }, []);


    const RenderHeader = () => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}

                onPress={() =>console.log("Sign Up")}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white

                    }}
                />
                <Text
                    style={{
                        marginLeft: SIZES.padding * 1.5,
                        color: COLORS.white,
                        ...FONTS.h4
                    }}
                >Sign Up</Text>


            </TouchableOpacity>
        )
    }

    const renderLogo = () => (
        <View
            style={{
                marginTop: SIZES.padding * 5,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image source={images.wallieLogo}
                   resizeMode="contain"
                   style={{
                       width: '80%'
                   }}
            />
        </View>
    )

    const renderForm = () => {
        return (
            <View
                style={{
                    marginTop:  30,
                    marginHorizontal: 30
                }}>

                <View
                    style={{
                        marginTop: SIZES.padding * 3,

                    }}
                >
                    <Text style={{color:COLORS.lightGreen, ...FONTS.body3}}>Full Name</Text>
                    <TextInput
                    style={{
                        marginVertical: SIZES.padding,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        color: COLORS.white,
                        height: 30,
                        ...FONTS.body3

                    }}
                    placeholder="Enter Full Name"
                    placeholderTextColor={COLORS.white}
                    selectionColor={COLORS.white}

                    />
                </View>

                <View
                    style={{
                        marginTop: SIZES.padding * 3,

                    }}
                >
                    <Text style={{color:COLORS.lightGreen, ...FONTS.body3}}>Email Address</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: '#fff',
                            borderBottomWidth: 1,
                            color: COLORS.white,
                            height: 30,
                            ...FONTS.body3

                        }}
                        placeholder="Email Address"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}

                    />
                </View>

                <View style={{marginTop: SIZES.padding* 2}}>
                    <Text style={{color:COLORS.lightGreen, ...FONTS.body3}}>Phone Number</Text>


                    <View style={{flexDirection: 'row'}}>
                    {/*  Country Code  */}

                    <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        marginHorizontal: 5,
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,

                        flexDirection: 'row',
                            ...FONTS.body2

                    }}
                    onPress={() =>setModalVisible(true)}
                    >

                        <View style={{justifyContent: 'center'}}>
                            <Image source={icons.down}
                                   style={{
                                       width: 10,
                                       height: 10,
                                       tintColor: COLORS.white
                                   }}
                            />

                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 8}}>
                            <Image source={{uri : selectedArea?.flag }}
                                   style={{
                                       width: 30,
                                       height: 30,

                                   }}
                            />
                        </View>
                        <View style={{justifyContent: 'center', marginLeft:5}}>
                            <Text style={{color: COLORS.white, ...FONTS.body3}}>{selectedArea?.callingCode}</Text>
                        </View>

                    </TouchableOpacity>
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding * 2,
                                borderBottomColor: '#fff',
                                borderBottomWidth: 1,
                                color: COLORS.white,
                                height: 30,
                                marginLeft: 5,
                                ...FONTS.body3
                            }}
                            placeholder="Enter Phone Number"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>
            {/*  Password  */}

            <View style={{marginTop: SIZES.padding*2}}>
                <Text style={{color:COLORS.lightGreen, ...FONTS.body3}}>Password</Text>
                <TextInput
                    style={{
                        marginVertical: SIZES.padding,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        color: COLORS.white,
                        height: 30,
                        ...FONTS.body3

                    }}
                    placeholder="Enter Password"
                    placeholderTextColor={COLORS.white}
                    selectionColor={COLORS.white}
                    secureTextEntry={!showPassword}

                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 10,
                        height:30,
                        width: 30


                    }}
                    onPress={() => {setShowPassword(!showPassword)}}
                >
                    <Image source={showPassword ? icons.disable_eye : icons.eye}
                      style={{
                          height: 20,
                          width: 20,
                          tintColor:COLORS.white
                      }}
                    />
                </TouchableOpacity>

            </View>




            </View>

                )
    }


    const renderButton = () => {
        return (
            <View style={{margin: SIZES.padding * 3}}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor:COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}

                    onPress={() => navigation.navigate('Verify')}
                >

                    <Text style={{color:COLORS.lightGreen, ...FONTS.h3}}>Continue</Text>

                </TouchableOpacity>
            </View>
        )
    }

    const renderAreaCodeModal = () => {

        const renderItem = ({item}) => {

            return (
                <TouchableOpacity
                    style={{padding: 10, flexDirection: 'row'}}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image source={{uri: item.flag}}
                           style={{
                               width: 30, height: 30, marginRight: 10
                           }}
                    />
                    <Text style={{...FONTS.body4}}>{item.name}</Text>
                </TouchableOpacity>
            )
        };

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() =>  setModalVisible(false)}
                >
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >


                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsHorizontalScrollIndicator={false}
                                style={{padding: SIZES.padding * 2, marginBottom: 20  }}
                            />

                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }






    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{flex:1}}
            >

                <ScrollView>
                    {RenderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}

                </ScrollView>

            </LinearGradient>


            {renderAreaCodeModal()}

        </KeyboardAvoidingView>
    );
};

export default SignUp;