const utils = {
  getDescription(filePath) {
    return filePath.replace(/^.*\\/, "").replace(/\.[^.]+$/, ""); // Remove "C:\fakepath\" and file extension
  },
  getID(filePath) {
    const idRegex = /C:\\fakepath\\([\w]{1,8})(?:-R1)?\s/;
    const match = idRegex.exec(filePath);
    return match ? match[1] : null;
  },
};

const data = {
  category: "Construction Project",
};

// Get the current URL
const currentURL = window.location.href;

// Bid Notice
if (currentURL.includes("MyBidNotices")) {
  const search = document.querySelector("#ext-comp-1012");
  if (search) {
    search.value = "Title";
  }

  const fileSubmit = document.querySelector("#edit-submitted-file-upload");
  if (fileSubmit) {
    fileSubmit.addEventListener("change", function () {
      const description = document.querySelector(
        "#edit-submitted-project-description"
      );
      if (description) {
        description.value = utils.getDescription(fileSubmit.value);
      }
      const contractIDInput = document.querySelector(
        "#edit-submitted-contract-id"
      );
      if (contractIDInput) {
        contractIDInput.value = utils.getID(fileSubmit.value);
      }
      const office = document.querySelector("#edit-submitted-office");
      if (office) {
        office.value = data.office;
      }
    });
  }
}

if (currentURL.includes("CreateNotice")) {
  const location = document.querySelector("#lstLoc");
  if (location) {
    location.value = 57;
  }
  const tradeAgree = document.querySelector("#ddlTrade");
  if (tradeAgree) {
    tradeAgree.value = 3;
  }
  const fundingSrc = document.querySelector("#lstFundingSrc");
  if (fundingSrc) {
    fundingSrc.value = 6;
  }
}
