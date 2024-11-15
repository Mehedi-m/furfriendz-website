function showPage(showId, hideId) {
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(showId).classList.add('block');

    hideId.forEach(hideId => {
      document.getElementById(hideId).classList.add('hidden');
      document.getElementById(hideId).classList.remove('block');
    });
  }