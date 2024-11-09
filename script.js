function showPage(showId, hideId) {
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(showId).classList.add('block');
    document.getElementById(hideId).classList.remove('block');
    document.getElementById(hideId).classList.add('hidden');
  }