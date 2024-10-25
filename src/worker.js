"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@git-diff-view/react");
var post = function (d) { return postMessage(d); };
onmessage = function (event) {
    var _a, _b, _c, _d, _e, _f;
    var _data = event.data;
    var data = _data.data;
    var file = new react_1.DiffFile(((_a = data === null || data === void 0 ? void 0 : data.oldFile) === null || _a === void 0 ? void 0 : _a.fileName) || '', ((_b = data === null || data === void 0 ? void 0 : data.oldFile) === null || _b === void 0 ? void 0 : _b.content) || '', ((_c = data === null || data === void 0 ? void 0 : data.newFile) === null || _c === void 0 ? void 0 : _c.fileName) || '', ((_d = data === null || data === void 0 ? void 0 : data.newFile) === null || _d === void 0 ? void 0 : _d.content) || '', (data === null || data === void 0 ? void 0 : data.hunks) || [], ((_e = data === null || data === void 0 ? void 0 : data.oldFile) === null || _e === void 0 ? void 0 : _e.fileLang) || '', ((_f = data === null || data === void 0 ? void 0 : data.newFile) === null || _f === void 0 ? void 0 : _f.fileLang) || '');
    file.initTheme(_data.theme);
    file.initRaw();
    file.initSyntax();
    file.buildSplitDiffLines();
    file.buildUnifiedDiffLines();
    var res = {
        id: _data.id,
        data: _data.data,
        bundle: file.getBundle(),
    };
    file.clear();
    post(res);
};
