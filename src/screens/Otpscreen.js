import { View, Text,ImageBackground, TextInput ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20,width:300,},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 3,
    borderColor: '#00000030',
    textAlign: 'center',
    borderColor:"green"
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;



const Otpscreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-green-100 justify-center">
    <View className="flex justify-center items-center">
    <CodeField
    ref={ref}
    {...props}
    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
    value={value}
    onChangeText={setValue}
    cellCount={CELL_COUNT}
    rootStyle={styles.codeFieldRoot}
    keyboardType="number-pad"
    textContentType="oneTimeCode"
    
    testID="my-code-input"
    renderCell={({index, symbol, isFocused}) => (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor/> : null)}
      </Text>
    )}
  />
  <View className="mt-[100px]">
    <TouchableOpacity className="bg-green-800 px-8 py-2 rounded-full flex flex-row w-[250px] space-x-10 justify-center items-center" onPress={()=>navigation.navigate("MyTabs")}>
    <Text className="text-white text-lg">Verify otp</Text>
    <View className="flex justify-end">
    <Ionicons name='arrow-forward' color={"white"} size={30} />
</View>
    
    </TouchableOpacity>
    
  
  </View>
    
    </View>

  
    </View>
  )
}

export default Otpscreen



