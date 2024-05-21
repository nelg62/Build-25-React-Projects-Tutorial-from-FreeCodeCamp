const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRanddomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
  showTabs: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Error occured Please try agian ");
  });
}

export default featureFlagsDataServiceCall;
