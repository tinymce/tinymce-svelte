export default {
  toolbar: 'exportword',
  name: 'exportword',
  config: {
    exportword_service_url: "https://exportdocx.converter.tiny.cloud",
    exportword_converter_options: {
      // 'Letter', 'Legal', 'Tabloid', 'Statement', 'Executive', 'A3', 'A4', 'A5', 'A6', 'B4', 'B5'
      format: 'A4',

      margin_top: '1in',
      margin_bottom: '1in',
      margin_right: '1in',
      margin_left: '1in',
      header: [
        {
          html: '<h1>First page header.</h1>', 
          css: 'h1 { font-size: 30px; }',
          
          //'default', 'even', 'odd', 'first'
          type: 'first'
        }
      ],

      footer: [
        {
          html: '<p>Page footer</p>',
          css: 'p { font-size: 12px; }',
          // 'default', 'even', 'odd', 'first'
          type: 'default'
        }
      ],

      // 'portrait' or 'landscape'
      orientation: 'portrait',
      auto_pagination: true,

      base_url: 'https://example.com',
      timezone: 'UTC'
    },
    exportword_converter_style: 'p { color: cyan !important }',
  },
};