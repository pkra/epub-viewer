MathJax.Extension.measureTime = {};

  MathJax.Hub.Register.StartupHook("Begin Typeset", function () {
    MathJax.Extension.measureTime.startTime = (new Date()).getTime();
  });

  MathJax.Hub.Register.StartupHook("End Typeset", function () {
    MathJax.Extension.measureTime.endTime = (new Date()).getTime();
  });

  MathJax.Hub.Register.StartupHook("End", function () {
    var delta = (MathJax.Extension.measureTime.endTime - MathJax.Extension.measureTime.startTime) / 1000.;
    MathJax.HTML.addElement(document.body, "div", null,
                            ["Typeset by MathJax in " + delta + " second(s)"]);
  });

  MathJax.Ajax.loadComplete("[MathJax]/extensions/measureTime.js");