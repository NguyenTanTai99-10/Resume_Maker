import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Images from '../../res/image';
import {screenWidth} from '../../res/style/theme';
import Header from '../custom/Header';
import Slider from '../custom/Slider';
// import Slider from '../custom/Slider'

const Home = (props) => {
  const [data, setData] = useState('');
  const [ImagesAVT, setImagesAVT] = useState(false);

  const [widthPercent, setWidthPercent] = useState();
  const [widthNoPercent, setWidthNoPercent] = useState();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setImagesAVT(true);

        setData(props.dataUser);

        const kq1 = (props.dataUser.percent_cv * 140) / 100;
        setWidthPercent(kq1);

        const kq2 = 140 - (props.dataUser.percent_cv * 140) / 100;
        setWidthNoPercent(kq2);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageUser);
        }, 10);
      }
    }
  }, [props.statusUser]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      props.infoUserAction({
        user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
        lang_code: '',
        emp_id: '',
        is_app_cv: 1,
      });
      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header
        isShowMenu
        onPressMenu={() => props.navigation.openDrawer()}
        isShowRight
        onPressRightVN={() => console.log('VN')}
        onPressRightEN={() => console.log('EN')}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 30,
            paddingTop: 50,
          }}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              height: screenWidth * 0.7,
              width: screenWidth * 0.8,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              alignItems: 'center',
            }}>
            {ImagesAVT === false ? (
              <Image
                source={require('../../res/image/img/avatar.png')}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'cover',
                  borderRadius: 100,

                  bottom: '85%',
                  position: 'absolute',
                  flex: 0.5,
                }}
              />
            ) : (
              <Image
                source={{uri: data.profile_image}}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'cover',
                  borderRadius: 100,

                  bottom: '85%',
                  position: 'absolute',
                  flex: 0.5,
                }}
              />
            )}

            <View
              style={{
                marginTop: 55,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontSize: 25, fontWeight: '700'}}>{data.name}</Text>

              <View
                style={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <TouchableOpacity style={{}}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../res/image/img/icon_restore_purcharse.png')}
                  />
                </TouchableOpacity>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 17,
                    alignSelf: 'center',
                    color: '#FA8C16',
                    width: '40%',
                  }}>
                  {data.resume_title}
                </Text>
                <TouchableOpacity
                style={{}}
                  onPress={() => {
                    console.log("123");
                    Linking.openURL(data.link_web);
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../res/image/img/icon_link_website.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 10}}>Muc do hoan thien CV : 100%</Text>
              <Slider
                kq1={widthPercent === undefined ? 0 : widthPercent}
                kq2={widthPercent === undefined ? 140 : widthNoPercent}
              />

              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  marginTop: 10,
                  borderColor: '#E6E7E9',
                }}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Your resume link
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      borderRadius: 10,
                      width: '90%',
                      backgroundColor: '#E8E8E8',
                    }}>
                    <Text
                      numberOfLines={4}
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                      }}>
                      {data.link_web}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../../res/image/img/new_icon_yourr_resume_link.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginVertical: 20}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResumeTitleContainer')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_resume_title.png')}
              />
              <Text style={{marginLeft: 10}}>Resume Title</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ContactContainer')}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_contact_information.png')}
              />
              <Text style={{marginLeft: 10}}>Contact Information</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // BasicInfoComponent
            onPress={() => props.navigation.navigate('BasicInfoComponent')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_basic_information.png')}
              />
              <Text style={{marginLeft: 10}}>Basic Information</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // LanguageComponent
            onPress={() => props.navigation.navigate('LanguageComponent')}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/translate.png')}
              />
              <Text style={{marginLeft: 10}}>Language</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EducationComponent')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_education.png')}
              />
              <Text style={{marginLeft: 10}}>Education</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ExperiencesComponent')}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_experiences.png')}
              />
              <Text style={{marginLeft: 10}}>Experiences</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SkillsComponent')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_skills.png')}
              />
              <Text style={{marginLeft: 10}}>Skills</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
          }}>
          <TouchableOpacity
            style={{
              width: screenWidth / 2,
              height: 50,
              backgroundColor: '#FA8C16',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 13,
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              Export CV
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
