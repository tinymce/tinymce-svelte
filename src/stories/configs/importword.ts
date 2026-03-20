export default {
  name: 'importword',
  toolbar: 'importword',
  config: {
    importword_service_url: "https://importdocx.converter.tiny.cloud",
    importword_converter_options: {
      formatting: {
        styles: 'inline',
        resets: 'inline',
        defaults: 'inline',
      }
    }
  }
};
