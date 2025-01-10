/* eslint-disable */

import noRedeclareMintPrimitiveVars from './custom-plugins/no-redeclare-mint-primitive-vars.mjs';
import noRedeclareMintSemanticVars from './custom-plugins/no-redeclare-mint-semantic-vars.mjs';
import noRedeclareMintUtil from './custom-plugins/no-redeclare-mint-util.mjs';
import noUsageMintPrimitiveVars from './custom-plugins/no-usage-mint-primitive-vars.mjs';
import useMintUtilOverVars from './custom-plugins/use-mint-util-over-vars.mjs';

export default {
  plugins: [
    noRedeclareMintPrimitiveVars,
    noRedeclareMintSemanticVars,
    noRedeclareMintUtil,
    noUsageMintPrimitiveVars,
    useMintUtilOverVars,
  ],
  rules: {
    'mint/no-primitive-color-variables': true,
    'mint/no-redeclared-utility-classes': true,
    'mint/no-redeclared-primitive-variables': true,
    'mint/no-redeclared-semantic-variables': [true, {
      allowHtmlScope: false,
    }],
    'mint/use-util-class-instead-of-semantic-variable': [true, { severity: 'warning' }],
  },
};
