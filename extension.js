const vscode = require('vscode');

function activate(context) {
  const config = vscode.workspace.getConfiguration('workbench.editor.customLabels');
  const patterns = {
    "**/*.clas.abap": "${dirname} - Global Class",
    "**/*.clas.implementations.abap": "${dirname} - Locale Types",
    "**/*.clas.definitions.abap": "${dirname} - Class-relevant Locale Types",
    "**/*.clas.testclasses.abap": "${dirname} - Test Classes",
    "**/*.clas.macros.abap": "${dirname} - Macros"
  };

  config.update('patterns', patterns, vscode.ConfigurationTarget.Global);
}

function deactivate() {
  const config = vscode.workspace.getConfiguration('workbench.editor.customLabels');
  config.update('patterns', undefined, vscode.ConfigurationTarget.Global);
}

module.exports = {
  activate,
  deactivate
};