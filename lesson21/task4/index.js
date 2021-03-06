export { getTitle, getDescription, getPlans, getGoal };

const getTitle = () => {
  const text = document.querySelector('.title');
  console.dir(text);
  return text.textContent;
};

const getDescription = () => {
  const inner = document.querySelector('.about');
  console.dir(inner);
  return inner.innerText;
};

const getPlans = () => {
  const plans = document.querySelector('.plans');
  console.dir(plans);
  return plans.innerHTML;
};

const getGoal = () => {
  const goal = document.querySelector('.goal');
  console.dir(goal);
  return goal.outerHTML;
};
