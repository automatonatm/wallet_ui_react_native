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



const Verify = ({navigation}) => {




    const RenderHeader = () => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}

                onPress={() => navigation.navigate('Home')}
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
                >Back To SignUp</Text>


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
                       width: '100%'
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
                        justifyContent: 'center'

                    }}
                >
                    <Text style={{color:COLORS.lightGreen, ...FONTS.body3}}>ENTER VERIFICATION PIN</Text>
                    <TextInput
                    style={{
                        marginVertical: SIZES.padding,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        color: COLORS.white,
                        height: 30,
                        ...FONTS.body3

                    }}
                    placeholder="PIN"
                    placeholderTextColor={COLORS.white}
                    selectionColor={COLORS.white}

                    />
                </View>

            {/*  Password  */}






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

                    onPress={() => navigation.navigate('Home')}
                >

                    <Text style={{color:COLORS.lightGreen, ...FONTS.h3}}>ACTIVATE</Text>

                </TouchableOpacity>
            </View>
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




        </KeyboardAvoidingView>
    );
};

export default Verify;