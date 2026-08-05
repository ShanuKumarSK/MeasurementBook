import React, { useEffect, useRef } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../AppText';
import theme from '../../../theme';

interface Props {
    visible: boolean;
    onClose: () => void;
    navigation: any;
}

const RightDrawer = ({
    visible,
    onClose,
    navigation,
}: Props) => {

    const slideAnim = useRef(
        new Animated.Value(350),
    ).current;

    useEffect(() => {

        if (visible) {

            Animated.spring(slideAnim, {

                toValue: 0,

                friction: 8,

                tension: 55,

                useNativeDriver: true,

            }).start();

        } else {

            Animated.spring(slideAnim, {

                toValue: 350,

                friction: 8,

                tension: 55,

                useNativeDriver: true,

            }).start();

        }

    }, [visible]);

    return (

        <Modal
            visible={visible}
            transparent
            statusBarTranslucent>

            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose}>

                <Animated.View

                    style={[

                        styles.drawer,

                        {

                            transform: [

                                {

                                    translateX: slideAnim,

                                },

                            ],

                        },

                    ]}>

                    {/* HEADER */}

                    <View style={styles.header}>

                        <View style={styles.avatar}>

                            <Ionicons
                                name="person"
                                size={42}
                                color="#FFF"
                            />

                        </View>

                        <AppText
                            color="white"
                            weight="700"
                            variant="h3">

                            User Name

                        </AppText>

                        <AppText
                            color="white">

                            Field Engineer

                        </AppText>

                    </View>

                    {/* Profile */}

                    <TouchableOpacity style={styles.row}>

                        <Ionicons
                            name="person-circle"
                            size={22}
                            color={theme.colors.primary}
                        />

                        <AppText style={styles.text}>
                            Profile
                        </AppText>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color="#CCC"
                        />

                    </TouchableOpacity>

                    {/* Logout */}

                    <TouchableOpacity style={styles.row}>

                        <Ionicons
                            name="log-out"
                            size={22}
                            color="#E53935"
                        />

                        <AppText
                            style={[
                                styles.text,
                                { color: '#E53935' },
                            ]}>

                            Logout

                        </AppText>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color="#CCC"
                        />

                    </TouchableOpacity>

                    <AppText style={styles.version}>
                        v1.0.0
                    </AppText>

                </Animated.View>

            </TouchableOpacity>

        </Modal >

    );

};

export default RightDrawer;

const styles = StyleSheet.create({

    overlay: {

        flex: 1,

        backgroundColor: 'rgba(0,0,0,0.35)',

        alignItems: 'flex-end',

    },

    drawer: {

        width: '78%',

        height: '100%',

        backgroundColor: '#FFF',

        alignSelf: 'flex-end',

    },

    header: {

        height: 220,

        backgroundColor: theme.colors.primary,

        justifyContent: 'center',

        alignItems: 'center',

    },

    avatar: {

        width: 90,

        height: 90,

        borderRadius: 45,

        backgroundColor: 'rgba(255,255,255,.18)',

        justifyContent: 'center',

        alignItems: 'center',

        marginBottom: 18,

    },

    row: {

        flexDirection: 'row',

        alignItems: 'center',

        paddingHorizontal: 18,

        height: 58,

        borderBottomWidth: 1,

        borderBottomColor: '#EFEFEF',

    },

    text: {

        flex: 1,

        marginLeft: 14,

    },

    version: {

        position: 'absolute',

        bottom: 18,

        alignSelf: 'center',

        color: '#999',

    },

});