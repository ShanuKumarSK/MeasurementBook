import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../../common/AppText';
import InfoRow from '../InfoRow';

import theme from '../../../theme';
import { AppButton, AppInput } from '../../common';

interface Props {
    title: string;
}

const ActivityRow = ({
    title,
}: Props) => {

    const [expanded, setExpanded] = useState(false);

    return (

        <View style={styles.container}>

            <TouchableOpacity
                style={styles.header}
                activeOpacity={0.8}
                onPress={() => setExpanded(!expanded)}>

                <AppText
                    color="white"
                    weight="600">

                    {title}

                </AppText>

                <Ionicons
                    name={
                        expanded
                            ? 'chevron-up'
                            : 'chevron-down'
                    }
                    size={18}
                    color="#FFF"
                />

            </TouchableOpacity>

            {expanded && (

                <View style={styles.body}>

                    <InfoRow
                        label="S.No"
                        value="1"
                    />

                    <InfoRow
                        label="Item No"
                        value="ACT370"
                    />

                    <InfoRow
                        label="Activity"
                        value="Land preparation for seed sowing"
                    />

                    <InfoRow
                        label="Unit"
                        value="cum"
                    />

                    <InfoRow
                        label="Total Qty"
                        value="0"
                    />

                    <InfoRow
                        label="Consumed Qty"
                        value="0"
                    />

                    <InfoRow
                        label="Remaining Qty"
                        value="200"
                    />

                    <InfoRow
                        label="Executing Qty"
                        value="0"
                    />

                    <InfoRow
                        label="Total Cost"
                        value="0"
                    />

                    {/* Measurement */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Ionicons
                                name="remove-outline"
                                size={18}
                                color="#2AA876"
                            />

                            <AppText
                                weight="700"
                                color="primary">

                                Measurement

                            </AppText>

                        </View>

                        <AppInput
                            label="No"
                            keyboardType="numeric"
                        />

                        <AppInput
                            label="Length"
                            keyboardType="numeric"
                        />

                        <AppInput
                            label="Breadth"
                            keyboardType="numeric"
                        />

                        <AppInput
                            label="Depth"
                            keyboardType="numeric"
                        />

                        <TouchableOpacity
                            style={styles.addMeasurement}>

                            <Ionicons
                                name="add-circle-outline"
                                size={20}
                                color={theme.colors.primary}
                                style={{ marginRight: 8 }}
                            />

                            <AppText
                                color="primary"
                                weight="600">

                                Add Measurement

                            </AppText>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Ionicons
                                name="pricetag-outline"
                                size={18}
                                color="#2AA876"
                            />

                            <AppText
                                weight="700"
                                color="primary">

                                Rate Component

                            </AppText>

                        </View>

                        <InfoRow
                            label="Unit Rate"
                            value="0"
                        />

                        <InfoRow
                            label="Unskilled Rate"
                            value="11"
                        />

                        <InfoRow
                            label="Semiskilled Rate"
                            value="13"
                        />

                        <InfoRow
                            label="Skilled Rate"
                            value="15"
                        />

                    </View>

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Ionicons
                                name="people-outline"
                                size={18}
                                color="#2AA876"
                            />

                            <AppText
                                weight="700"
                                color="primary">

                                Labour Component

                            </AppText>

                        </View>

                        <InfoRow
                            label="Labour Unskilled"
                            value="0"
                        />

                        <InfoRow
                            label="Labour Semiskilled"
                            value="0"
                        />

                        <InfoRow
                            label="Labour Skilled"
                            value="0"
                        />

                    </View>

                    <AppButton
                        title="Calculate"
                        style={styles.button}
                        onPress={() => { }}
                    />

                </View>

            )}

        </View>

    );

};

export default ActivityRow;

const styles = StyleSheet.create({

    container: {

        marginBottom: 14,

    },

    header: {

        height: 44,

        backgroundColor: '#22A06B',

        borderRadius: 8,

        paddingHorizontal: 14,

        flexDirection: 'row',

        justifyContent: 'space-between',

        alignItems: 'center',

    },

    body: {

        backgroundColor: '#FFF',

        borderWidth: 1,

        borderColor: '#E6E6E6',

        borderTopWidth: 0,

        paddingHorizontal: 14,

        paddingVertical: 8,

    },

    section: {

        marginTop: 18,

    },

    sectionHeader: {

        flexDirection: 'row',

        alignItems: 'center',

        backgroundColor: '#EDFDF5',

        borderWidth: 1,

        borderColor: '#D8F3E5',

        borderRadius: 8,

        paddingHorizontal: 12,

        paddingVertical: 10,

        gap: 8,

        marginBottom: 8,

    },

    button: {

        marginTop: 20,

    },

    addMeasurement: {

        flexDirection: 'row',

        justifyContent: 'center',

        alignItems: 'center',

        paddingVertical: 12,

        marginTop: 8,

    },
});