export default {
  name: 'searchreplace',
  toolbar: 'searchreplace',
  config: {
    save_onsavecallback: function () { alert("Saved"); },
    save_oncancelcallback: function () { alert("Save Cancelled"); },
  }
};
