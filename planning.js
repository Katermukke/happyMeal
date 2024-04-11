document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.querySelector("#calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next,today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    events: [
      {
        id: "a",
        title: "my event",
        start: "2024-04-11",
      },
    ],
    editable: true,
    eventDrop: function (info) {
      console.log("Event dropped:", info.event);
    },

    eventClick: function (info) {
      info.event.remove();
    },
  });
  calendar.render();

  const draggableItem = document.querySelector("#draggable-item");
  new FullCalendar.Draggable(draggableItem, {
    eventData: {
      title: "My Draggable Event",
      start: new Date(),
    },
  });
});

let test = 1;

console.log(test);
