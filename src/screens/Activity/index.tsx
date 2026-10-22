import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
    ScreenWrapper,
    AppButton,
    AppText,
} from '../../components/common';

import SelectionHeader from '../../components/common/SelectionHeader';
import theme from '../../theme';
import ActivityContainer from '../../components/Activity/ActivityContainer';
import MaterialContainer from '../../components/Activity/MaterialContainer';
import RightDrawer from '../../components/common/RightDrawer';

const Activity = ({ navigation }: any) => {

    const [activityExpanded, setActivityExpanded] = useState(false);
    const [materialExpanded, setMaterialExpanded] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    return (
        <>
            <ScreenWrapper scroll={false}>

                <SelectionHeader
                    title="Activity Component"
                    subtitle="Work details & material breakdown"
                    icon="bar-chart"
                    onBackPress={() => navigation.goBack()}
                    onMenuPress={() => setDrawerVisible(true)}
                />
                <View style={styles.card}>

                    {/* Activity Component */}

                    {/* <TouchableOpacity
                    style={styles.mainHeader}
                    activeOpacity={0.8}
                    onPress={() =>
                        setActivityExpanded(!activityExpanded)
                    }>

                    <View style={styles.headerLeft}>

                        <Ionicons
                            name={
                                activityExpanded
                                    ? 'chevron-down'
                                    : 'chevron-forward'
                            }
                            size={20}
                            color="#FFF"
                        />

                        <AppText
                            color="white"
                            weight="700">

                            Activity Component

                        </AppText>

                    </View>

                </TouchableOpacity> */}

                    <ActivityContainer />

                    {/* {activityExpanded && (

                    <View style={styles.body}>

                        <ActivityItem />

                    </View>

                )} */}

                    {/* Material Component */}

                    {/* <TouchableOpacity
                    style={[
                        styles.mainHeader,
                        {
                            marginTop: 18,
                        },
                    ]}
                    activeOpacity={0.8}
                    onPress={() =>
                        setMaterialExpanded(!materialExpanded)
                    }>

                    <View style={styles.headerLeft}>

                        <Ionicons
                            name={
                                materialExpanded
                                    ? 'chevron-down'
                                    : 'chevron-forward'
                            }
                            size={20}
                            color="#FFF"
                        />

                        <AppText
                            color="white"
                            weight="700">

                            Material Component

                        </AppText>

                    </View>

                </TouchableOpacity> */}


                    <MaterialContainer />


                    {/* {materialExpanded && (

                    <View style={styles.body}>

                        <TouchableOpacity
                            style={styles.childCard}
                            activeOpacity={0.8}>

                            <View style={styles.childLeft}>

                                <Ionicons
                                    name="chevron-forward"
                                    size={18}
                                    color={theme.colors.primary}
                                />

                                <AppText weight="600">
                                    1. Material Component
                                </AppText>

                            </View>

                        </TouchableOpacity>

                    </View>

                )} */}

                    <AppButton
                        title="Next"
                        style={styles.button}
                        onPress={() => { }}
                    />

                </View>

            </ScreenWrapper>
            <RightDrawer

                visible={drawerVisible}

                navigation={navigation}

                onClose={() => setDrawerVisible(false)}

            />
        </>
    );
};

export default Activity;

const styles = StyleSheet.create({

    card: {

        marginTop: -35,

        marginHorizontal: 14,

        backgroundColor: '#FFF',

        borderRadius: 30,

        padding: 18,

        elevation: 6,

        marginBottom: 20,

    },

    mainHeader: {

        backgroundColor: theme.colors.primary,

        borderRadius: 14,

        height: 52,

        justifyContent: 'center',

        paddingHorizontal: 16,

    },

    headerLeft: {

        flexDirection: 'row',

        alignItems: 'center',

        gap: 10,

    },

    body: {

        marginTop: 10,

    },

    childCard: {

        backgroundColor: '#F8F9FC',

        borderRadius: 12,

        borderWidth: 1,

        borderColor: '#E8E8E8',

        padding: 16,

    },

    childLeft: {

        flexDirection: 'row',

        alignItems: 'center',

        gap: 8,

    },

    button: {

        marginTop: 25,

    },

});