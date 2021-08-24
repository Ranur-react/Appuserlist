import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
export const styles = StyleSheet.create({
    //Layout
    Layout:{
        flex:1,
        flexDirection: 'column',
        width: WIDTH,
        backgroundColor:'#2996D3',  
    },
    //Scroll
    ScrollFlex: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#ffff',
        width: WIDTH,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,  

    },
    Container: {
        
        flex: 1,
        width: WIDTH,
        marginTop:50,
    },
    SubContainer: {
        flex: 1,
        width: 'auto',
        marginHorizontal: 10,
    },

    //Kotak
    HistoryCard: {
        backgroundColor: '#ebf9f9',
        height: 91,
        marginBottom: 10,
        padding: 15.5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    ImageCapture: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 16
    },

    Title: {
        textAlign: 'left',
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        color: 'black',
        textTransform: 'capitalize'
    }, label: {
        textAlign: 'left',
        fontFamily: 'Raleway',
        fontSize: 11,
        marginLeft:5,
        fontWeight: '500',
        color: 'rgba(50,50,50,0.5)',
        textTransform: 'none'


    }
})