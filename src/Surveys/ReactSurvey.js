import React from "react";
import * as Survey from "survey-react";
import myCss from "survey-react/survey.css";

Survey.StylesManager.applyTheme("default");

let makePage = element => {
  return {
    elements: [element]
  };
};

let makePages = elements => {
  return elements.map(element => makePage(element));
};

let barrating1 = {
  type: "barrating",
  name: "barrating1",
  ratingTheme: "css-stars",
  title: "Please rate the movie you've just watched",
  choices: ["1", "2", "3", "4", "5"]
};

let jobpos = {
  type: "radiogroup",
  name: "position",
  title: "Choose job position...",
  isRequired: true,
  colCount: 0,
  choices: [
    "1|Designer",
    "2|Front-end Developer",
    "3|Back-end Developer",
    "4|Database Administrator",
    "5|System Engineer"
  ]
};

let matrix = {
  type: "matrix",
  name: "Quality",
  title:
    "Please indicate if you agree or disagree with the following statements",
  columns: [
    {
      value: 1,
      text: "Strongly Disagree"
    },
    {
      value: 2,
      text: "Disagree"
    },
    {
      value: 3,
      text: "Neutral"
    },
    {
      value: 4,
      text: "Agree"
    },
    {
      value: 5,
      text: "Strongly Agree"
    }
  ],
  rows: [
    {
      value: "affordable",
      text: "Product is affordable"
    },
    {
      value: "does what it claims",
      text: "Product does what it claims"
    },
    {
      value: "better then others",
      text: "Product is better than other products on the market"
    },
    {
      value: "easy to use",
      text: "Product is easy to use"
    }
  ]
};

let jobpos1 = { ...jobpos };
jobpos1.name = "altname";

const json1 = {
  title: "Product Feedback Survey Example",
  showProgressBar: "top",
  goNextPageAutomatic: true,
  showNavigationButtons: true,
  pages: [makePage(barrating1), makePage(jobpos), makePage(jobpos1)]
};

let dropdownq = {
  type: "dropdown",
  renderAs: "select2",
  choicesByUrl: {
    url: "https://restcountries.eu/rest/v1/all"
  },
  name: "countries",
  title: "Please select the country you have arrived from:"
};

let radiogroup = {
  type: "radiogroup",
  name: "position",
  title: "Choose job position...",
  isRequired: true,
  colCount: 0,
  choices: [
    "1|Designer",
    "2|Front-end Developer",
    "3|Back-end Developer",
    "4|Database Administrator",
    "5|System Engineer"
  ]
};

let imgpicker = {
  type: "imagepicker",
  name: "choosepicture",
  title: "What animal would you like to see first ?",
  choices: [
    {
      value: "lion",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
    },
    {
      value: "giraffe",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
    },
    {
      value: "panda",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
    },
    {
      value: "camel",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
    }
  ]
};

let slider = {
  type: "bootstrapslider",
  name: "bootstrapslider"
};

let signaturepad = {
  type: "signaturepad",
  name: "sign",
  title: "Please enter your signature"
};

let sortableList = {
  type: "sortablelist",
  name: "lifepriopity",
  title: "Life Priorities ",
  isRequired: true,
  colCount: 0,
  choices: ["family", "work", "pets", "travels", "games"]
};

let datePicker = {
  name: "date",
  type: "datepicker",
  inputType: "date",
  title: "Your favorite date:",
  dateFormat: "mm/dd/yy",
  isRequired: true
};

let signaturePad = {
  type: "signaturepad",
  width: "500px",
  name: "Signature Pad - you can enter your signature here:"
};

let rating = {
  type: "rating",
  name: "satisfaction",
  title: "How satisfied are you with the Product?",
  mininumRateDescription: "Not Satisfied",
  maximumRateDescription: "Completely satisfied"
};

let rating1 = {
  type: "rating",
  name: "recommend friends",
  visibleIf: "{satisfaction} > 3",
  title:
    "How likely are you to recommend the Product to a friend or co-worker?",
  mininumRateDescription: "Will not recommend",
  maximumRateDescription: "I will recommend"
};

let suggestions = {
  type: "comment",
  name: "suggestions",
  title: "What would make you more satisfied with the Product?"
};

let radiogroup2 = {
  type: "radiogroup",
  name: "price to competitors",
  title: "Compared to our competitors, do you feel the Product is",
  choices: [
    "Less expensive",
    "Priced about the same",
    "More expensive",
    "Not sure"
  ]
};

let radiogroup1 = {
  type: "radiogroup",
  name: "price",
  title: "Do you feel our current price is merited by our product?",
  choices: [
    "correct|Yes, the price is about right",
    "low|No, the price is too low for your product",
    "high|No, the price is too high for your product"
  ]
};

let multipleText = {
  type: "multipletext",
  name: "pricelimit",
  title: "What is the... ",
  items: [
    {
      name: "mostamount",
      title: "Most amount you would every pay for a product like ours"
    },
    {
      name: "leastamount",
      title: "The least amount you would feel comfortable paying"
    }
  ]
};

let email = {
  type: "text",
  name: "email",
  title:
    'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
};

let survey = new Survey.Model(json1);

survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

// function animate(animitionType, duration) {
//     if (!duration)
//         duration = 1000;
//     var element = document.getElementById("surveyElement");
//     $(element).velocity(animitionType, {duration: duration});
// }

// var doAnimantion = true;
// survey
//     .onCurrentPageChanging
//     .add(function (sender, options) {
//         if (!doAnimantion)
//             return;
//         options.allowChanging = false;
//         setTimeout(function () {
//             doAnimantion = false;
//             sender.currentPage = options.newCurrentPage;
//             doAnimantion = true;
//         }, 500);
//         animate("slideUp", 500);
//     });
// survey
//     .onCurrentPageChanged
//     .add(function (sender) {
//         animate("slideDown", 500);
//     });
// survey
//     .onCompleting
//     .add(function (sender, options) {
//         if (!doAnimantion)
//             return;
//         options.allowComplete = false;
//         setTimeout(function () {
//             doAnimantion = false;
//             sender.doComplete();
//             doAnimantion = true;
//         }, 500);
//         animate("slideUp", 500);
//     });
// animate("slideDown", 1000);;

export default () => {
  return <Survey.Survey model={survey} css={myCss} />;
};
