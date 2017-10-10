import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.dots';

export default function styleConstructor(theme={}) {
    const appStyle = {...defaultStyle, ...theme};
    return StyleSheet.create({
        base: {
            width: 46,
            height: 46,
            alignItems: 'center'
        },
        text: {
            marginTop: 9,
            fontSize: appStyle.textDayFontSize,
            fontFamily: appStyle.textDayFontFamily,
            fontWeight: '300',
            color: appStyle.dayTextColor,
            backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        alignedText: {
            marginTop: Platform.OS === 'android' ? 9 : 9
        },
        selected: {
            backgroundColor: appStyle.selectedDayBackgroundColor,
            borderRadius: 23
        },
        selectedBorder: {
            borderWidth: 1,
            borderColor: appStyle.selectedDayBorderColor,
            borderRadius: 23
        },
        todayText: {
            color: appStyle.todayTextColor
        },
        selectedText: {
            color: appStyle.selectedDayTextColor
        },
        disabledText: {
            color: appStyle.textDisabledColor
        },
        dot: {
            width: 6,
            height: 6,
            marginTop: 1,
            borderRadius: 3,
            opacity: 0
        },
        visibleDot: {
            opacity: 1,
            backgroundColor: appStyle.dotColor,
            marginRight: 2,
            marginLeft: 2
        },
        selectedDot: {
            backgroundColor: appStyle.selectedDotColor
        },
        ...(theme[STYLESHEET_ID] || {})
    });
}
