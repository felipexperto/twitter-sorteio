

const dateMask = (args) => {
  const { event, keyCode, targetValue } = args;
  if (keyCode === 8 || keyCode === 46) return;

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
  const { event, keyCode, targetValue } = args;
  if (keyCode === 8 || keyCode === 46) return;

  const v = targetValue;
  let r = v.replace(/\D/g, '');

   if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{1})/, '$1:$2');
  } else if (r.length > 1) {
    r = r.replace(/^(\d*)/, '$1');
  }
  event.target.value = r;
};


export {
  dateMask,
  hourMask,
}
