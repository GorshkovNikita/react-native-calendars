import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/*<Text style={styles.text}>Calendar with selectable date and arrows</Text>*/}
        {/*<Calendar*/}
          {/*onDayPress={this.onDayPress}*/}
          {/*style={styles.calendar}*/}
          {/*hideExtraDays*/}
          {/*markedDates={{[this.state.selected]: {selected: true}}}*/}
        {/*/>*/}
        <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>

        <Calendar
          style={styles.calendar}
          firstDay={1}
          markedDates={{
            '2017-10-10': {selected: true, markers: ['blue']},
            '2017-10-25': {markers: ['red', 'green', 'blue'], selected: true},
            '2017-10-26': {disabled: true}
          }}
          hideArrows={true}
          theme={{
              selectedDayTextColor: '#2d4150',
              selectedDayBorderColor: '#00adf5'
          }}
          markingType={'dots'}
        />

        {/*<Text style={styles.text}>Calendar with marked dates and spinner</Text>*/}
        {/*<Calendar*/}
          {/*style={styles.calendar}*/}
          {/*current={'2012-05-16'}*/}
          {/*minDate={'2012-05-10'}*/}
          {/*displayLoadingIndicator*/}
          {/*markingType={'interactive'}*/}
          {/*renderDay={(textStyle, xDate) => (*/}
              {/*<Text style={textStyle}>hey</Text>*/}
          {/*)}*/}
          {/*theme={{*/}
            {/*calendarBackground: '#333248',*/}
            {/*textSectionTitleColor: 'white',*/}
            {/*dayTextColor: 'white',*/}
            {/*todayTextColor: 'white',*/}
            {/*selectedDayTextColor: '#00adf5',*/}
            {/*selectedDayBorderColor: '#00adf5',*/}
            {/*monthTextColor: 'white',*/}
            {/*selectedDayBackgroundColor: '#333248',*/}
            {/*arrowColor: 'white',*/}
            {/*'stylesheet.calendar.header': {*/}
              {/*week: {*/}
                {/*marginTop: 5,*/}
                {/*flexDirection: 'row',*/}
                {/*justifyContent: 'space-between'*/}
              {/*}*/}
            {/*}*/}
          {/*}}*/}
          {/*markedDates={{*/}
            {/*'2012-05-08': [{textColor: '#666'}],*/}
            {/*'2012-05-09': [{textColor: '#666'}],*/}
            {/*'2012-05-14': [{startingDay: true, color: 'blue'}, {endingDay: true, color: 'blue'}],*/}
            {/*'2012-05-21': [{startingDay: true, color: 'blue'}],*/}
            {/*'2012-05-22': [{endingDay: true, color: 'gray'}],*/}
            {/*'2012-05-24': [{startingDay: true, color: 'gray'}],*/}
            {/*'2012-05-25': [{color: 'gray'}],*/}
            {/*'2012-05-26': [{endingDay: true, color: 'gray'}]}}*/}
          {/*hideArrows={false}*/}
        {/*/>*/}
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 400
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
