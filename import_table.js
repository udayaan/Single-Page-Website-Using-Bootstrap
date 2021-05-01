let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i+=3) {
      let event = data[i]["content"]["$t"];
      let date = data[i+1]["content"]["$t"];
      let details = data[i+2]["content"]["$t"];

      document.getElementById("event-data-sheet").innerHTML +=
        "<tr>" +
        "<td>" +
        event +
        "</td>" +
        "<td>" +
        date +
        "</td>" +
        "<td>" +
        details +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
    "GET",
    "https://spreadsheets.google.com/feeds/cells/1b2SMSm0rksopbb8eB3XNtIhbyCAOKv1EnHC540B3XX0/od6/public/full?alt=json",
    true
  );
xmlhttp.send();