console.log('Hello Webpack');

// require
var reqUtil = require("./require_module_exports");
console.log("util.add =", reqUtil.add(8, 7));
console.log("util.getName =", reqUtil.getName());


// import, export
import * as importUtil from "./import_export";
console.log("importUtil.sub =", importUtil.sub(9, 4));
console.log("importUtil.multi =", importUtil.multi(8, 7));

import { multi } from "./import_export";
console.log("multi =", multi(9, 4));
