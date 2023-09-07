document.addEventListener("DOMContentLoaded", function () {
  const currentUTCTimeElement = document.getElementById("currentUTCTime");
  const currentDayOfTheWeekElement = document.getElementById(
    "currentDayOfTheWeek"
  );

  function updateDateTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toISOString(); 
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    currentUTCTimeElement.textContent = currentUTCTime;
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
