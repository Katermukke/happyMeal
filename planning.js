document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.querySelector("#calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next,today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    events: [],
    editable: true,
    eventDrop: function (info) {
      console.log("Event dropped:", info.event);
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

  const trash = document.querySelector("#trash");
  trash.addEventListener("drop", function (event) {
    event.preventDefault();
    const eventId = event.dataTransfer.getData("text");
    const eventToRemove = calendar.getEventById(eventId);
    if (eventToRemove) {
      eventToRemove.remove();
      console.log("Event removed:", eventToRemove);
    }
  });
  trash.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
});

let test = 1;

console.log(test);
