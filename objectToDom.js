const domInput = {
  type: "div",
  props: { id: "hello" },
  children: [{ type: "h1", children: ["HELLO"] }],
};

const createDomElementFromObj = (inputNode) => {
  if (inputNode.type === "string") {
    return document.createTextNode(inputNode);
  }

  const element = document.createElement(inputNode.type);

  if (inputNode.props) {
    for (const [key, value] of Object.entries(inputNode.props)) {
      if (key === "children") continue;
      element.setAttributes(key, value);
    }
  }

  if (inputNode.children) {
    inputNode.children.forEach((child) => {
      const childElement = createDomElementFromObj(child);
      element.appendChild(childElement);
    });
  }

  return element;
};
