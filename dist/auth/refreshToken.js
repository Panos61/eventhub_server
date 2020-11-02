"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
exports.refreshToken = (res, token) => {
    res.cookie('ehc', token, {
        httpOnly: true,
        path: '/refresh-token',
    });
};
//# sourceMappingURL=refreshToken.js.map