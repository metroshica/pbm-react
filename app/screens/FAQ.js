import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {     
    Linking,
    SafeAreaView,
    ScrollView, 
    StyleSheet, 
    View, 
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { 
    HeaderBackButton,
    Text, 
} from '../components'
import { 
    headerStyle,
    headerTitleStyle,
} from '../styles'

class FAQ extends Component {
  
    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: 'FAQ',
            drawerIcon: () => <MaterialIcons name='question-answer' style={[s.drawerIcon]} />, 
            headerLeft: <HeaderBackButton navigation={navigation} />,
            title: 'FAQ',
            headerRight:<View style={{padding:6}}></View>,
            headerTitleStyle,
            headerStyle,    
            headerTintColor: '#4b5862'
        }
    }
     
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#f5fbff'}}>
                <ScrollView style={{flex:1,backgroundColor:'#f5fbff'}}>
                    <View style={s.container}>
                        <View style={s.child}>
                            <Text style={s.bold}>{`How do I search for a particular machine?`}</Text>
                            <Text style={s.text}>{`When you're on the map screen, click the "filter" button in the upper right, then choose a machine. Then go back to the map and it will only show places with that machine.`}</Text>
                            <Text style={s.bold}>{`When I filter for "Cool Machine (Pro)", I also see results for "Cool Machine (LE). What's up?`}</Text>
                            <Text style={s.text}>{`This is by design. We've found that most users want to see all versions, and don't want to conduct 3 separate searches for the same title.`}</Text>
                            <Text style={s.bold}>{`How do I add a new location?`}</Text>
                            <Text style={s.text}>{`Click the menu icon in the lower right, and choose "Submit Location". Then fill out the form! Our administrators moderate submissions, and it can take a few days. The more accurate and thorough your submission, the quicker it will get added!`}</Text>
                            <Text style={s.bold}>{`How do I remove a machine from a location?`}</Text>
                            <Text style={s.text}>{`Click on the machine name, and then look for a "remove" button.`}</Text>
                            <Text style={s.bold}>{`This location closed/no longer has machines. What do I do - do I need to tell you?`}</Text>
                            <Text style={s.text}>{`Simply remove all the machines from it. Empty locations are periodically removed.`}</Text>
                            <Text style={s.bold}>{`When I search for a city, the city is listed twice (and maybe the second instance of it is misspelled). Or, I see the same location listed twice. Or, the place is in the wrong spot on the map. Etc.`}</Text>
                            <Text style={s.text}>{`These are data entry mistakes. Please `}<Text onPress={ () => this.props.navigation.navigate('Contact') } style={{textDecorationLine: 'underline'}}>{"contact us"}</Text>{` so we can fix them.`}</Text>
                            <Text style={s.bold}>{`How do I get listed as an operator?`}</Text>
                            <Text style={s.text}>{<Text onPress={ () => this.props.navigation.navigate('Contact') } style={{textDecorationLine: 'underline'}}>{"Contact us"}</Text>}{ ` and we'll add you.`}</Text>
                            <Text style={s.bold}>{`What is your privacy policy?`}</Text>
                            <Text style={s.text}>Please see our <Text style={{textDecorationLine: 'underline'}} onPress={() => Linking.openURL('http://pinballmap.com/privacy')}>detailed privacy policy</Text>. The overview: We do not track or store user locations, nor store any personal information. We do not sell any user data. We do not use third-party analytics. This site is not monetized. We keep a log of map edits that users make.</Text>
                            <Text style={s.bold}>{`Have a question that we didn't cover here?`} <Text onPress={ () => this.props.navigation.navigate('Contact') } style={s.textLink}>{"Ask us!"}</Text></Text>
                        </View>  
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const s = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    child: {
        margin: "auto",
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        padding: 10,
        color: "#f5fbff",
        backgroundColor: "#6a7d8a"
    },
    textLink: {
        textDecorationLine: 'underline',
        color: "#D3ECFF",
    },
    drawerIcon: {
        fontSize: 24,
        color: '#6a7d8a'
    },
})

FAQ.propTypes = {
    navigation: PropTypes.object,
}

export default FAQ
