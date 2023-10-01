import { Bodies } from "matter-js";

export function populateWithLetterAreas(wOffset, hOffset) {
  const linkData = getLinkData("style-1");
  const collisionAreas = [];
  let x = 0;

  for (let link of linkData) {
    let averageLetterWidth = getAverageLetterSize("width", link.spans);
    for (let span of link.spans) {
      x === 0 ? (x = span.offsetLeft - wOffset) : (x += averageLetterWidth);
      collisionAreas.push({
        body: Bodies.rectangle(
          x,
          span.offsetTop + hOffset,
          averageLetterWidth,
          span.offsetHeight,

          {
            isStatic: true,
            isSensor: true,
            render: {
              fillStyle: "transparent",
            },
            label: "letter",
          }
        ),
        element: span,
      });
    }
    x = 0;
  }

  return collisionAreas;
}

function getAverageLetterSize(type, elems) {
  if (!type && !elems) return;
  let total = Array.from(elems).reduce(
    (total, span) =>
      (total += span[type === "width" ? "offsetWidth" : "offsetHeight"]),
    0
  );
  return total / elems.length;
}

function getLinkData(id) {
  const linkData = [];
  const list = document.getElementById(id);
  const links = list.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    linkData.push({
      linkId: "link" + (i + 1),
      spans: links[i].querySelectorAll("span"),
    });
  }

  return linkData;
}
