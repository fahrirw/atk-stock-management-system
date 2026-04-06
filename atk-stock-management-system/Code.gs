function BukaAtk() {
  const html = HtmlService.createHtmlOutputFromFile('FormAtk')
  .setWidth(320)
  .setHeight(420)
  SpreadsheetApp.getUi().showModalDialog(html,'Form ATK');
}

function simpanData2(form) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('StockAtk');
  
// Cari baris terakhir yang memiliki data, lalu tambahkan di bawahnya
  var row = 6; // Asumsi mulai dari baris ke-2 (sesuaikan jika berbeda)
  while (sheet.getRange(row, 6).getValue() !== "") {
    row++;
  }
  
  sheet.getRange(row, 2).setValue(form.form);
  sheet.getRange(row, 3).setValue(form.qty);
  sheet.getRange(row, 4).setValue(form.tanggal);
  sheet.getRange(row, 5).setValue(form.pic);
  sheet.getRange(row, 6).setValue(form.keperluan);

  return 'Data Berhasil Disimpan';

}