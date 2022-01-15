const addBindings = (elements, func, binding) => {
  if (!Array.isArray(elements)) elements.addEventListener(binding, func);
  else elements.forEach((element) => element.addEventListener(binding, func));
};

const removeBindings = (elements, func, binding) => {
  if (!Array.isArray(elements)) elements.removeEventListener(binding, func);
  else
    elements.forEach((element) => element.removeEventListener(binding, func));
};

module.exports.addBindings = addBindings;
module.exports.removeBindings = removeBindings;
