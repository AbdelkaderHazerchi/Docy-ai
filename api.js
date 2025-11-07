// api.js

let API_KEY = null;

function getHoursDifference(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60);
}

function veiw_model_warn(messageCount, launchWarning = false) {
  if (messageCount >= 10 && !launchWarning) {
    document.querySelector('.model_warn').classList.add('show');
  }
}
