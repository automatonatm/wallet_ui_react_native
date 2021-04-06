import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

import { Camera } from 'expo-camera';
import {COLORS, SIZES, FONTS, icons, images} from '../constants'



const Scan = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.on);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding * 4,
                    paddingHorizontal: SIZES.padding * 3,

                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems:'center',
                        width: 45,
                        justifyContent: 'center'
                    }}

                    onPress={() => {navigation.navigate('Home')} }
                >
                    <Image source={icons.close}
                           style={{
                               height: 20,
                               width: 20,
                               tintColor: COLORS.white
                           }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{color:COLORS.white, ...FONTS.body3}}>
                        Scan for Payments
                    </Text>

                </View>

                <TouchableOpacity
                    style={{
                        height: 45,
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.green,
                        borderRadius: 10
                    }}
                >

                    <Image source={icons.info}
                           style={{
                               height: 25,
                               width: 25,
                               tintColor: COLORS.white
                           }}
                    />


                </TouchableOpacity>
            </View>
        )
    }

    const renderPayment  =  () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 220,
                    padding:SIZES.padding * 3,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <Text style={{...FONTS.h4}}>Another Payment Method</Text>
                <View style={{
                    flex: 1, flexDirection: "row", alignItems:'flex-start',
                    marginTop: SIZES.padding *2
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems:'center',
                        }}
                    >

                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightpurple,
                            alignItems: 'center',
                            justifyContent:'center',
                            borderRadius: 10
                        }}>
                            <Image source={icons.phone}
                                   resizeMode="cover"
                                   style={{
                                       height:25,
                                       width: 25,
                                       tintColor: COLORS.purple
                                   }}
                            />

                        </View>

                        <Text style={{
                            marginLeft: 10, ...FONTS.body4
                        }}>Phone Number</Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems:'center',
                            marginLeft:20
                        }}
                    >

                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightGreen,
                            alignItems: 'center',
                            justifyContent:'center',
                            borderRadius: 10
                        }}>
                            <Image source={icons.barcode}
                                   resizeMode="cover"
                                   style={{
                                       height:25,
                                       width: 25,
                                       tintColor: COLORS.green
                                   }}
                            />

                        </View>

                        <Text style={{
                            marginLeft: 10, ...FONTS.body4
                        }}>Barcode</Text>


                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScanFocus = () => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={images.focus}
                       resizeMode="stretch"
                       style={{
                           width: 400,
                           height: 500,
                           marginTop: "-55%"
                       }}
                />
            </View>
        )
    }

    const onBarCodeScanned = (result) => {
        console.log(result.data)
    }

    return (
        <View style={{flex:1, backgroundColor: COLORS.transparent}}>
            <Camera
                style={{flex: 1}} type={type}
                onBarCodeScanned={onBarCodeScanned}
                    flashMode={flashMode}>
                {renderHeader()}
                {renderScanFocus()}
                {renderPayment()}
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default Scan;