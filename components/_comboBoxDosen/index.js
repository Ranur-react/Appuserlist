import React, { Component } from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import { View } from 'react-native';




export default class SelectInputNative extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  UNSAFE_componentWillMount(){
    console.log('==============Data List Combo Box======================');
    console.log(this.props.data);
    console.log('====================================');
  }
  render() {
    const theme = extendTheme({
      components: {
        Select: {
          baseStyle: this.props.style,
          defaultProps: {},
          variants: {},
          sizes: {},
        },
      },
    });


    const ComboData = () => {
      let [language, setLanguage] = React.useState("")
      return (
        <NativeBaseProvider theme={theme}>
          <VStack alignItems="center" space={4}>
            <Select
              selectedValue={this.props.selectedValue}
              minWidth={{width: this.props.lebar}}
              accessibilityLabel={this.props.lable}
              placeholder={this.props.lable}
              onValueChange={itemValue => this.props.onSelectData(itemValue)}
              _selectedItem={{
                bg: 'cyan.600',
                endIcon: <CheckIcon size={5} />,
              }}>
              {this.props.data.map((value, i) => {
                return (
                  <Select.Item
                    key={i}
                    label={value.nama_dosen}
                    value={value.id_dosen}
                  />
                );
              })}
            </Select>
          </VStack>
        </NativeBaseProvider>
      );
    }
    if (!this.props.data) {
      return (
        <NativeBaseProvider >
        <Center flex={1} >
          
        </Center>
      </NativeBaseProvider>
      )
    } else {
      return (
        <NativeBaseProvider >
          <Center flex={1} >
            <ComboData />
          </Center>
        </NativeBaseProvider>
      )
    }

  }
}
