import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback, FlatList, Image, TouchableOpacity } from 'react-native'
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';




const BottomSheet = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)
  const [selectItem, setSelectItem] = useState('')
  const time = 300;
  const modalHeight = props.modalHeight;
  const animation = new Animated.Value(modalHeight);
  // console.log(props);

  useImperativeHandle(ref, () => ({
    open: () => {
      onShow();
    },
    close: () => {
      onHide();
    },
  }));
  const slideUp = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: time,
      useNativeDriver: true
    }).start()
  }
  const slideDown = () => {
    Animated.timing(animation, {
      toValue: modalHeight,
      duration: time,
      useNativeDriver: true
    }).start()
  }
  const onShow = () => {
    setShow(true)
  }
  const onHide = () => {
    slideDown()
    setTimeout(() => {
      setShow(false)
    }, time)
  }
  const renderItems = ({ item, index }) => (
    <TouchableOpacity onPress={() => { 
      // props.onPress();
       setSelectItem(item);  
       
       setShow(false)
       
      }} 
      style={{
      padding: Sizes.h16, borderBottomWidth: 1,
      borderColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <Text>{item}</Text>
      {selectItem===item?<Image source={require("../../res/image/img/checked.png")} style={{ width: Sizes.s25, height: Sizes.s25, resizeMode: 'contain' }} />:null}
    </TouchableOpacity>
  )
  useEffect(() => {
    console.log('show===' , show);
    show ? slideUp() : onHide()
  }, [show])

  return (
    <Modal visible={show} transparent statusBarTranslucent animationType='fade'>
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.modal, { height: modalHeight, transform: [{ translateY: animation }] }]}>
              <View style={styles.title}>
                <Text style={{fontSize: 17}}>{props.title}</Text>
              </View>
              <FlatList
                data={props.data}
                renderItem={renderItems}
                keyExtractor={(item, index) => String(index)}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
})

export default BottomSheet
BottomSheet.defaultProps = {
  modalHeight: Dimensions.get('window').height * 0.4,
  data: [],
  onPressTime:()=>{},
  onPressSession:()=>{}
  
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: "flex-end"
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: Sizes.h24,
    borderTopRightRadius: Sizes.h24
  },
  title: {
    
    height: Sizes.s80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E6E7E9'
  }
})