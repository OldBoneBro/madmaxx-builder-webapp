export function getVidStyles(leftPos) {
  let leftVid, midVid, rightVid;

  switch (leftPos) {
    case 0:
      leftVid = {
        position: "absolute",
        backgroundColor: "#FF0000",
        width: "731px",
        height: "411px",
        zIndex: "2",
        opacity: "0.5",
        translate: "96px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        translate: "350px",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 13%, rgba(156,156,156,1) 13%, rgba(156,156,156,1) 87%, rgba(45,87,44,1) 87%, rgba(45,87,44,1) 100%)",
      };
      rightVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        opacity: "0.5",
        translate: "31px",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 13%, rgba(156,156,156,1) 13%, rgba(156,156,156,1) 87%, rgba(45,87,44,1) 87%, rgba(45,87,44,1) 100%)",
      };
      break;
    case 96:
      leftVid = {
        position: "static",
        backgroundColor: "#00FF00",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        translate: "0px",
      };
      midVid = {
        position: "absolute",
        backgroundColor: "#FF0000",
        width: "731px",
        height: "411px",
        zIndex: "2",
        opacity: "1",
        translate: "0px",
      };
      rightVid = {
        position: "static",
        backgroundColor: "#0000FF",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        translate: "0px",
      };
      break;
    case 462:
      leftVid = {
        position: "static",
        width: "367px",
        height: "225px",
        zIndex: "0",
        opacity: "0.5",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 13%, rgba(156,156,156,1) 13%, rgba(156,156,156,1) 87%, rgba(45,87,44,1) 87%, rgba(45,87,44,1) 100%)",
        translate: "-23px",
      };
      midVid = {
        position: "static",
        width: "548px",
        height: "308px",
        zIndex: "1",
        opacity: "0.5",
        background:
          "linear-gradient(90deg, rgba(96,110,140,1) 0%, rgba(96,110,140,1) 13%, rgba(156,156,156,1) 13%, rgba(156,156,156,1) 87%, rgba(45,87,44,1) 87%, rgba(45,87,44,1) 100%)",
        translate: "-342px",
      };
      rightVid = {
        position: "absolute",
        backgroundColor: "#FF0000",
        width: "731px",
        height: "411px",
        zIndex: "2",
        opacity: "0.5",
        translate: "96px",
      };
      break;
  }

  return [leftVid, midVid, rightVid];
}
