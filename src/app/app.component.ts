import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  jsonData =
    [{
      "dummy1": {
        "Book ID": "1",
        "Book Name": "Computer Architecture",
        "Category": "Computers",
        "Price": "125.60"
      },
      "dummy2": {
        "Book ID": "2",
        "Book Name": "Asp.Net 4 Blue Book",
        "Category": "Programming",
        "Price": "56.00"
      },
      "dummy3": {
        "Book ID": "3",
        "Book Name": "Popular Science",
        "Category": "Science",
        "Price": "210.40"
      }
    }];

  // readTextFile(file, callback) {
  //   var rawFile = new XMLHttpRequest();
  //   rawFile.overrideMimeType("application/json");
  //   rawFile.open("GET", file, true);
  //   rawFile.onreadystatechange = function () {
  //     if (rawFile.readyState === 4 && rawFile.status == 200) {
  //       callback(rawFile.responseText);
  //     }
  //   }
  //   rawFile.send(null);
  // }

  // readTextFile("/Users/Documents/workspace/test.json", function(text) {
  //   var data = JSON.parse(text);
  //   console.log(data);
  // });

  ngOnInit() {
    // this.jsonData.forEach(function (item, index) {
    //   for (const lee in item) {
    //     const values = item[lee];
    //     var fieldSetNode = document.createElement("fieldSet");
    //     fieldSetNode.setAttribute('class', 'scheduler-border');

    //     var legendText = document.createElement("LEGEND");
    //     var t = document.createTextNode(lee);
    //     legendText.setAttribute('class', 'scheduler-border');
    //     legendText.appendChild(t);
    //     fieldSetNode.appendChild(legendText);

    //     for (const newVal in values) {
    //       console.log(newVal);
    //       console.log(values[newVal]);

    //       var node1 = document.createElement("label");
    //       var t = document.createTextNode(newVal);
    //       node1.appendChild(t);

    //       var divElm = document.createElement("div");
    //       divElm.setAttribute("class", "col-md-4");
    //       divElm.appendChild(node1);

    //       var node2 = document.createElement("input");
    //       node2.setAttribute("value", values[newVal]);
    //       node2.setAttribute("class", "form-control");
    //       divElm.appendChild(node2);

    //       fieldSetNode.appendChild(divElm);

    //       document.getElementById("div_form").appendChild(fieldSetNode);
    //     }
    //   }
    // });
  }
}
