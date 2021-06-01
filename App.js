import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";




////////////////////////////////////////////////////////////
import LoginContainer from './src/container/LoginContainer/LoginContainer';

import HomeContainer from './src/container/HomeContainer/HomeContainer';






////////////////////////////////////////////////////////////

import  DrawerContainer  from './src/container/DrawerContainer/DrawerContainer';
import LoginHomeContainer from './src/container/LoginHomeContainer/LoginHomeContainer';
import ListCVContainer from './src/container/ListCVContainer/ListCVContainer';
import ResumeTitleComponent from './src/component/ResumeTitleComponent';
import ContactComponent from './src/component/ContactComponent';
import BasicInfoComponent from './src/component/BasicInfoComponent';
import LanguageComponent from './src/component/LanguageComponent';
import EducationComponent from './src/component/EducationComponent';
import ExperiencesComponent from './src/component/ExperiencesComponent';
import SkillsComponent from './src/component/SkillsComponent';
import ResumeTitleContainer from './src/container/ResumeTitleContainer/ResumeTitleContainer';
import ContactContainer from './src/container/ContactContainer/ContactContainer';
import  ContactHomeContainer  from './src/container/ContactHomeContainer/ContactHomeContainer';
import  ResumeHomeContainer  from './src/container/ResumeHomeContainer/ResumeHomeContainer';
import  BasicInfoContainer  from './src/container/BasicInfoContainer/BasicInfoContainer';






















//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContainer {...props} />}>
         
         <Drawer.Screen name="HomeContainer" component={HomeContainer} />
         

         
      </Drawer.Navigator>
   );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
   useEffect(() => {
      setTimeout(() => {
         RNBootSplash.hide()
         
      }, 1000);
     
   }, [])
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               ...TransitionPresets.SlideFromRightIOS,
            }}>
            
            <Stack.Screen name="LoginContainer" component={LoginContainer} />
            
            <Stack.Screen name="LoginHomeContainer" component={LoginHomeContainer} />
            <Stack.Screen name="Drawers" component={Drawers} />
            <Stack.Screen name="ListCVContainer" component={ListCVContainer} />
            <Stack.Screen name="ResumeTitleContainer" component={ResumeTitleContainer} />
            <Stack.Screen name="ContactContainer" component={ContactContainer} />
            <Stack.Screen name="BasicInfoComponent" component={BasicInfoComponent} />
            <Stack.Screen name="LanguageComponent" component={LanguageComponent} />
            <Stack.Screen name="EducationComponent" component={EducationComponent} />
            <Stack.Screen name="ExperiencesComponent" component={ExperiencesComponent} />
            <Stack.Screen name="SkillsComponent" component={SkillsComponent} />
            <Stack.Screen name="ContactHomeContainer" component={ContactHomeContainer} />
            <Stack.Screen name="ResumeHomeContainer" component={ResumeHomeContainer} />
            <Stack.Screen name="BasicInfoContainer" component={BasicInfoContainer} />

            {/* BasicInfoContainer */}
            {/* ResumeHomeContainer */}
            {/* ContactHomeContainer */}
            {/* SkillsComponent */}
            {/* ExperiencesComponent */}
            {/* Education */}
            {/* ResumeTitleComponent */}
            {/* ListCVContainer */}
            {/* ContactComponent */}
            {/* BasicInfoComponent */}
            {/* LanguageComponent */}
            
            
            
            
     
            
            
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;
