export default {
  name: 'insertdatetime',
  toolbar: 'insertdatetime',
  config: {
    // override the default formatting rule for date formats inserted by the mceInsertDate command
    insertdatetime_dateformat: "%Y/%m/%d",

    // override the default formatting rule for times inserted by the mceInsertTime command
    insertdatetime_timeformat: "%H%M%S",

    // specify a list of date/time formats to be used in the date menu or date select box
    insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D", "%H%M%S", "%Y/%m/%d"],
  }
};
