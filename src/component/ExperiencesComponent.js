import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Images from '../res/image'
import { screenHeight, screenWidth } from '../res/style/theme'
import Sizes from '../utils/Sizes'
import BottomSheet from './custom/BottomSheet'
import DatetimePicker from './custom/DatetimePicker'
import StatusBarView from './custom/StatusBarView'

const ExperiencesComponent = (props) => {
    const [check, setCheck] = useState(false)
    const modal = React.createRef();
    
    return (
        <View style={{ flex: 1 }}>
        <StatusBarView />
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            <View style={{}}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            left: 0,
                            height: Sizes.h95,
                            paddingHorizontal: Sizes.h32,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => props.navigation.goBack()}>
                        <Image source={Images.arrow} style={{
                            width: Sizes.s50,
                            height: Sizes.s50,
                        }} />
                    </TouchableOpacity>

                    <Image source={require('../res/image/img/iconnumber06.png')} style={{
                        width: Sizes.s140,
                        height: Sizes.s140,
                        resizeMode: 'contain'
                    }} />
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            left: 0,
                            height: Sizes.h95,
                            paddingHorizontal: Sizes.h32,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => {console.log('lamgido');}}>
                        <Image source={require('../res/image/img/add.png')} style={{
                            width: Sizes.s50,
                            height: Sizes.s50,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#2EB553' }}>
                    Kinh nghiệm làm việc
            </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={{ color: 'red' }}>
                    * Vui lòng chọn địa chỉ
                </Text> */}


                </View>
                <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 80 , marginTop:10}}>
                    <Image source={require('../res/image/img/iconskill.png')} style={{  height: 35, width: 35, resizeMode: 'contain' }} />
                    <TextInput
                        

                        placeholder="Kinh nghiệm"
                        style={{ width: '70%',marginLeft: 15, }}>
                    </TextInput>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={{ color: 'red' }}>
                    * Vui lòng chọn địa chỉ
                </Text> */}


                </View>
                <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 80 , marginTop:10}}>
                    <Image source={require('../res/image/img/iconnamecompany.png')} style={{  height: 35, width: 35, resizeMode: 'contain' }} />
                    <TextInput
                        

                        placeholder="Tên công ty"
                        style={{ width: '70%',marginLeft: 15, }}>
                    </TextInput>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ ngày sinh của bạn
                </Text> */}


                </View>

                <DatetimePicker title ="Thời gian bắt đầu làm việc"/>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ ngày sinh của bạn
                </Text> */}


                </View>

                <DatetimePicker title ="Thời gian nghĩ việc"/>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={{ color: 'red' }}>
                    * Vui lòng chọn địa chỉ
                </Text> */}


                </View>
                <TouchableOpacity
                    onPress={() => modal.current.open()}
                    style={{ marginTop:10,flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 80, }}>
                    <Image source={require('../res/image/img/icondegree.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                    <Text
                        style={{ marginLeft: 15, color: '#BFBFBF' }}>
                        Cấp bật
                </Text>
                </TouchableOpacity>


                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' ,marginBottom:60}}>
                    {check === false ? <TouchableOpacity

                        style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: screenWidth * 0.8 / 2, backgroundColor: '#FA8C16', borderRadius: 13 }}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', }}>
                            Cập nhập
                    </Text>
                    </TouchableOpacity> :
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('') }}
                            style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: screenWidth * 0.8 / 2, backgroundColor: '#2EB553', borderRadius: 13 }}>
                            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', }}>
                                Tiếp tục
                </Text>
                        </TouchableOpacity>

                    }


                </View>
                <BottomSheet
                    ref={modal}
                    title="Chọn cấp bật"
                    data={[]}
                    modalHeight={screenHeight/2}

                />
               
              
            </ScrollView>
            </View>
    )
}

export default ExperiencesComponent