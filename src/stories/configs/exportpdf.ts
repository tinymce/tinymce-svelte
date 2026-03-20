export default {
  name: 'exportpdf',
  toolbar: 'exportpdf',
  config: {
    exportpdf_service_url: "https://exportpdf.converter.tiny.cloud",
    exportpdf_converter_options: {
      header_html: '<div style="text-align:center;">Document Title</div><div>Date: <span class="date"></span></div><div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
      footer_html: '<div style="text-align:right;">Confidential</div>',
      header_and_footer_css: 'div { color: blue; font-family: Arial, sans-serif; font-size: 10pt; }',
      margin_top: '2cm',
      margin_bottom: '2cm',
      margin_left: '20mm',
      margin_right: '20mm',
      format: 'A4',
      page_orientation: 'portrait',
    },
    exportpdf_converter_style: 'body { color: black !important; font-family: Helvetica, Arial, sans-serif; } p { color: cyan !important; }',
  }
};
