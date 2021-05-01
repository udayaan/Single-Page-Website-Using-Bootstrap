let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i+=9) {
      let center = data[i]["content"]["$t"];
      let city = data[i+1]["content"]["$t"];
      let addr = data[i+2]["content"]["$t"];
      let landmark = data[i+3]["content"]["$t"];
      let coordinator = data[i+4]["content"]["$t"];
      let contact = data[i+5]["content"]["$t"];
      let email = data[i+6]["content"]["$t"];
      let days = data[i+7]["content"]["$t"];
      let times = data[i+8]["content"]["$t"];

      document.getElementById("center-data-sheet").innerHTML +=
        "<tr>" +
        "<td>" +
        center +
        "</td>" +
        "<td>" +
        city +
        "</td>" +
        "<td>" +
        addr +
        "</td>" +
        "<td>" +
        landmark +
        "</td>" +
        "<td>" +
        coordinator +
        "</td>" +
        "<td>" +
        contact +
        "</td>" +
        "<td>" +
        email +
        "</td>" +
        "<td>" +
        days +
        "</td>" +
        "<td>" +
        times +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp2.open(
    "GET",
    "https://spreadsheets.google.com/feeds/cells/1DpQ0cPbYkdzX305YI_2h5qE0R3J7ljHjXpDMSN3zJh0/od6/public/full?alt=json",
    true
  );
xmlhttp2.send();