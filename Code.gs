function doPost(e) {
  try {
    var SHEET_NAME = 'Submissions';
    var SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';

    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      sheet.appendRow([
        'submittedAt',
        'email',
        'locationCapturedAt',
        'permissionState',
        'latitude',
        'longitude',
        'accuracyMeters',
        'altitude',
        'altitudeAccuracy',
        'heading',
        'speed',
        'score',
        'total',
        'answersJson',
        'userAgent',
        'language',
        'platform',
        'screenWidth',
        'screenHeight',
        'viewportWidth',
        'viewportHeight',
        'timeZone'
      ]);
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || '',
      data.email || '',
      data.locationCapturedAt || '',
      data.permissionState || '',
      data.location && data.location.latitude != null ? data.location.latitude : '',
      data.location && data.location.longitude != null ? data.location.longitude : '',
      data.location && data.location.accuracy != null ? data.location.accuracy : '',
      data.location && data.location.altitude != null ? data.location.altitude : '',
      data.location && data.location.altitudeAccuracy != null ? data.location.altitudeAccuracy : '',
      data.location && data.location.heading != null ? data.location.heading : '',
      data.location && data.location.speed != null ? data.location.speed : '',
      data.quiz && data.quiz.score != null ? data.quiz.score : '',
      data.quiz && data.quiz.total != null ? data.quiz.total : '',
      JSON.stringify(data.quiz && data.quiz.answers ? data.quiz.answers : []),
      data.client && data.client.userAgent ? data.client.userAgent : '',
      data.client && data.client.language ? data.client.language : '',
      data.client && data.client.platform ? data.client.platform : '',
      data.client && data.client.screenWidth != null ? data.client.screenWidth : '',
      data.client && data.client.screenHeight != null ? data.client.screenHeight : '',
      data.client && data.client.viewportWidth != null ? data.client.viewportWidth : '',
      data.client && data.client.viewportHeight != null ? data.client.viewportHeight : '',
      data.client && data.client.timeZone ? data.client.timeZone : ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
