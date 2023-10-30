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
        backgroundColor: "#FF0000",
        width: "731px",
        height: "411px",
        zIndex: "2",
        opacity: "0.5",
        translate: "0px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        translate: "371px",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 17.5%, rgba(156,156,156,1) 17.5%, rgba(156,156,156,1) 82.5%, rgba(45,87,44,1) 82.5%, rgba(45,87,44,1) 100%)",
      };
      rightVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        opacity: "0.5",
        translate: "100px",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 26.16%, rgba(156,156,156,1) 26.16%, rgba(156,156,156,1) 73.84%, rgba(45,87,44,1) 73.84%, rgba(45,87,44,1) 100%)",
      };
      break;
    case 3:
      leftVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        opacity: "0.5",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 26.16%, rgba(156,156,156,1) 26.16%, rgba(156,156,156,1) 73.84%, rgba(45,87,44,1) 73.84%, rgba(45,87,44,1) 100%)",
        translate: "-99.5px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 17.5%, rgba(156,156,156,1) 17.5%, rgba(156,156,156,1) 82.5%, rgba(45,87,44,1) 82.5%, rgba(45,87,44,1) 100%)",
        translate: "-370.5px",
      };
      rightVid = {
        position: "absolute",
        backgroundColor: "#FF0000",
        width: "731px",
        height: "411px",
        zIndex: "2",
        opacity: "0.5",
        translate: "0px",
      };
      break;
  }

  return [leftVid, midVid, rightVid];
}
