const dateMask = (args) => {
  const { event, targetValue } = args;

  const v = targetValue;
  let r = v.replace(/\D/g, '');

  if (r.length > 8) {
    r = r.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
  } else if (r.length > 4) {
    r = r.replace(/^(\d{2})(\d{2})(\d*).*/, '$1/$2/$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{1})/, '$1/$2');
  } else if (r.length > 1) {
    r = r.replace(/^(\d*)/, '$1');
  }
  event.target.value = r;
};

const hourMask = (args) => {
  const { event, targetValue } = args;

  const v = targetValue;
  let r = v.replace(/\D/g, '');

   if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{1})/, '$1:$2');
  } else if (r.length > 1) {
    r = r.replace(/^(\d*)/, '$1');
  }
  event.target.value = r;
};

const maxValueNumberMask = (args) => {
  const { event, targetValue, maxValue } = args;

  const currentValue = targetValue;
  const isMaxInputLengthValid = /^\s*-?[0-9]{0,3}$/.test(currentValue);

  console.log(currentValue);
  console.log(isMaxInputLengthValid);

  if (isMaxInputLengthValid) {
    event.target.value = (currentValue <= maxValue) ? currentValue : maxValue;
  } else {
    const newValue = currentValue.split('').slice(0,-1).join('');
    event.target.value = newValue;
  }
}

export {
  dateMask,
  hourMask,
  maxValueNumberMask,
}
