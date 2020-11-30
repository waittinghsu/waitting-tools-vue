export function eportFile(header, data, filename, bookType) {
  import('@/vendor/Export2Excel').then(excel => {
    excel.export_json_to_excel({
      header,
      data,
      filename,
      autoWidth: true,
      bookType, // xlsx, csv, txt
    });
  });
}
