// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';

// import { ScreenWrapper, AppButton } from '../../components/common';

// import SelectionHeader from '../../components/common/SelectionHeader';
// import theme from '../../theme';
// import ActivityContainer from '../../components/Activity/ActivityContainer';
// import MaterialContainer from '../../components/Activity/MaterialContainer';
// import RightDrawer from '../../components/common/RightDrawer';

// const Activity = ({ navigation }: any) => {
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   return (
//     <>
//       <ScreenWrapper scroll={true}>
//         <SelectionHeader
//           title="Activity Component"
//           subtitle="Work details & material breakdown"
//           icon="bar-chart"
//           onBackPress={() => navigation.goBack()}
//           onMenuPress={() => setDrawerVisible(true)}
//         />
//         <View style={styles.card}>
//           <ActivityContainer />

//           <MaterialContainer />

//           <AppButton
//             title="Save as Draft"
//             style={styles.button}
//             onPress={() => {}}
//           />
//         </View>
//       </ScreenWrapper>
//       <RightDrawer
//         visible={drawerVisible}
//         navigation={navigation}
//         onClose={() => setDrawerVisible(false)}
//       />
//     </>
//   );
// };

// export default Activity;

// const styles = StyleSheet.create({
//   card: {
//     marginTop: -35,

//     marginHorizontal: 14,

//     backgroundColor: '#FFF',

//     borderRadius: 30,

//     padding: 18,

//     elevation: 6,

//     marginBottom: 20,
//   },

//   mainHeader: {
//     backgroundColor: theme.colors.primary,

//     borderRadius: 14,

//     height: 52,

//     justifyContent: 'center',

//     paddingHorizontal: 16,
//   },

//   headerLeft: {
//     flexDirection: 'row',

//     alignItems: 'center',

//     gap: 10,
//   },

//   body: {
//     marginTop: 10,
//   },

//   childCard: {
//     backgroundColor: '#F8F9FC',

//     borderRadius: 12,

//     borderWidth: 1,

//     borderColor: '#E8E8E8',

//     padding: 16,
//   },

//   childLeft: {
//     flexDirection: 'row',

//     alignItems: 'center',

//     gap: 8,
//   },

//   button: {
//     marginTop: 25,
//   },
// });




import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';

import { launchCamera } from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';
import Ionicons from '@react-native-vector-icons/ionicons';

import {
  ScreenWrapper,
  AppButton,
  AppText,
} from '../../components/common';

import SelectionHeader from '../../components/common/SelectionHeader';
import ActivityContainer from '../../components/Activity/ActivityContainer';
import MaterialContainer from '../../components/Activity/MaterialContainer';
import RightDrawer from '../../components/common/RightDrawer';

interface PhotoLocation {
  latitude: number;
  longitude: number;
}

const Activity = ({ navigation }: any) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoLocation, setPhotoLocation] =
    useState<PhotoLocation | null>(null);
  const [capturing, setCapturing] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS !== 'android') {
      return true;
    }

    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    return result === PermissionsAndroid.RESULTS.GRANTED;
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return result === PermissionsAndroid.RESULTS.GRANTED;
    }

    return new Promise<boolean>(resolve => {
      Geolocation.requestAuthorization(
        () => resolve(true),
        () => resolve(false),
      );
    });
  };

  const getCurrentLocation = () =>
    new Promise<PhotoLocation>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        },
      );
    });

  const handleCapturePhoto = async () => {
    if (capturing) {
      return;
    }

    setCapturing(true);

    try {
      const cameraGranted = await requestCameraPermission();

      if (!cameraGranted) {
        Alert.alert(
          'Camera Permission',
          'Please allow camera access to capture a photo.',
        );
        return;
      }

      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
        quality: 0.8,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert(
          'Camera Error',
          result.errorMessage ?? 'Unable to capture photo.',
        );
        return;
      }

      const asset = result.assets?.[0];

      if (!asset?.uri) {
        Alert.alert('Error', 'Photo was not captured successfully.');
        return;
      }

      // Keep the captured photo visible even if GPS is unavailable.
      setPhotoUri(asset.uri);
      setPhotoLocation(null);

      const locationGranted = await requestLocationPermission();

      if (!locationGranted) {
        Alert.alert(
          'Location Permission',
          'Photo captured, but location permission was not granted.',
        );
        return;
      }

      try {
        const location = await getCurrentLocation();
        setPhotoLocation(location);
      } catch {
        Alert.alert(
          'Location Unavailable',
          'Photo captured, but GPS coordinates could not be obtained.',
        );
      }
    } catch {
      Alert.alert('Error', 'Unable to capture photo.');
    } finally {
      setCapturing(false);
    }
  };

  return (
    <>
      <ScreenWrapper scroll={true}>
        <SelectionHeader
          title="Activity Component"
          subtitle="Work details & material breakdown"
          icon="bar-chart"
          onBackPress={() => navigation.goBack()}
          onMenuPress={() => setDrawerVisible(true)}
        />

        <View style={styles.card}>
          <ActivityContainer />

          <MaterialContainer />

          <View style={styles.photoSection}>
            {photoUri && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: photoUri }}
                  style={styles.photo}
                  resizeMode="cover"
                />

                {photoLocation ? (
                  <View style={styles.locationContainer}>
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color="#168653"
                    />

                    <View style={styles.coordinates}>
                      <AppText weight="600">
                        Latitude: {photoLocation.latitude}
                      </AppText>

                      <AppText weight="600">
                        Longitude: {photoLocation.longitude}
                      </AppText>
                    </View>
                  </View>
                ) : (
                  <AppText style={styles.locationPending}>
                    Location unavailable
                  </AppText>
                )}
              </View>
            )}

            <TouchableOpacity
              style={styles.photoButton}
              activeOpacity={0.8}
              onPress={handleCapturePhoto}
              disabled={capturing}
            >
              <Ionicons
                name={photoUri ? 'camera-reverse-outline' : 'camera-outline'}
                size={21}
                color="#FFFFFF"
              />

              <AppText color="white" weight="700">
                {capturing
                  ? 'Opening Camera...'
                  : photoUri
                    ? 'Retake Photo'
                    : 'Add a Photo'}
              </AppText>
            </TouchableOpacity>
          </View>

          <AppButton
            title="Save as Draft"
            style={styles.button}
            onPress={() => {}}
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

  photoSection: {
    marginTop: 6,
  },

  previewContainer: {
    marginBottom: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E1E8E4',
    borderRadius: 12,
    backgroundColor: '#F8FBF9',
  },

  photo: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    backgroundColor: '#EAEAEA',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
    gap: 8,
  },

  coordinates: {
    flex: 1,
    gap: 5,
  },

  locationPending: {
    marginTop: 10,
    color: '#B45309',
  },

  photoButton: {
    minHeight: 50,
    backgroundColor: '#1976D2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  button: {
    marginTop: 18,
  },
});