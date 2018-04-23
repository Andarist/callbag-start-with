
const startWith = (...xs) => inputSource => (start, outputSink) => {
  if (start !== 0) return;
  let inputTalkback;
  inputSource(0, (it,id) => {
    if (it === 0){
      inputTalkback = id;
      outputSink(0, ot => {
        if (ot === 2) inputTalkback(ot);
      });
      xs.forEach(x => outputSink(1, x));
    } else {
      outputSink(it, id);
    }
    if (it !== 2) inputTalkback(1);
  });
};

module.exports = startWith;
