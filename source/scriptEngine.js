var transpile = function(sourceCode, parserOptions, compilerOptions) {
  var module = parse(sourceCode, parserOptions);
  var outputStream = new OutputStream(compilerOptions);
  module.print(outputStream);
  var transpiledCode = String(outputStream) + "\n";
  return transpiledCode;
};

var execute = function(transpiledCode) {
  (new Function(transpiledCode))();
};
