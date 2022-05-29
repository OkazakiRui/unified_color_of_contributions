const colorChange = () => {
  const shibafu = document.querySelectorAll('.ContributionCalendar-day');
  shibafu.forEach((kusa) =>
    kusa.dataset.level !== '0' && kusa.dataset.date
      ? (kusa.dataset.level = '4')
      : null
  );
};

colorChange();
setInterval(colorChange, 30);
