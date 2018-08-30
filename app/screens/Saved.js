import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class RecentMachines extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      machines: this.props.machines.machines
    }
  }
// I just copied the recentmachines screen code as a placeholder. 
// But this screen should be like LocationList, but only showing SAVED locations.
  render(){
    return(
      <View>
        <Text>Saved</Text>
        {this.state.machines.map(machine => <Text key={machine.id}>{machine.name}</Text>)}
      </View>);
  }
}

const mapStateToProps = ({ machines }) => ({ machines })
export default connect(mapStateToProps)(RecentMachines);