export function getVidStyles(leftPos) {
  let leftVid = {};
  let midVid = {};
  let rightVid = {};
  // 548 - 17.5 : 82.5; 367 - 26.16 : 73.84
  // old - 13 : 87; translate - 350 : 31, -342: -23
  switch (leftPos) {
    case 1:
      leftVid = {
        position: "absolute",
        backgroundColor: "#FFF",
        width: "731px",
        height: "411px",
        zIndex: "2",
        translate: "0px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        translate: "371px",
        backgroundColor: "#1F1F1F",
      };
      rightVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        translate: "100px",
        backgroundColor: "#1F1F1F",
      };
      break;
    case 3:
      leftVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        backgroundColor: "#1F1F1F",
        translate: "-99.5px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        backgroundColor: "#1F1F1F",
        translate: "-370.5px",
      };
      rightVid = {
        position: "absolute",
        backgroundColor: "#FFF",
        width: "731px",
        height: "411px",
        zIndex: "2",
        translate: "0px",
      };
      break;
  }

  return [leftVid, midVid, rightVid];
}
