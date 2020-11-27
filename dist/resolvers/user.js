"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const User_1 = require("../entity/User");
const RegisterInput_1 = require("./RegisterInput");
const typeorm_1 = require("typeorm");
const registerValidator_1 = require("../utils/registerValidator");
const auth_1 = require("../auth/auth");
const refreshToken_1 = require("../auth/refreshToken");
const jsonwebtoken_1 = require("jsonwebtoken");
const isAuth_1 = require("../auth/isAuth");
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserResponse.prototype, "accessToken", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    hello() {
        return 'hiiiii';
    }
    me(context) {
        const authorization = context.req.headers['authorization'];
        if (!authorization) {
            return null;
        }
        try {
            const token = authorization.split(' ')[1];
            const payload = jsonwebtoken_1.verify(token, process.env.ACCESS_TOKEN_SECRET);
            return User_1.User.findOne(payload.userID);
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    register(options, { res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = registerValidator_1.registerValidator(options);
            if (errors) {
                return { errors, accessToken: '' };
            }
            const hashedPassword = yield argon2_1.default.hash(options.password);
            let user;
            try {
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(User_1.User)
                    .values({
                    email: options.email,
                    username: options.username,
                    password: hashedPassword,
                })
                    .returning('*')
                    .execute();
                user = result.raw[0];
            }
            catch (error) {
                return {
                    accessToken: '',
                    errors: [
                        {
                            field: 'Register Error',
                            message: 'Email or Username already taken.',
                        },
                    ],
                };
            }
            refreshToken_1.refreshToken(res, auth_1.createRefreshToken(user));
            return { user, accessToken: auth_1.createAccessToken(user) };
        });
    }
    login(email, password, { res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return {
                    accessToken: '',
                    errors: [
                        {
                            field: 'Login Error',
                            message: 'Ο χρήστης δεν υπάρχει.',
                        },
                    ],
                };
            }
            const valid = yield argon2_1.default.verify(user.password, password);
            if (!valid) {
                return {
                    accessToken: '',
                    errors: [
                        {
                            field: 'Login Error',
                            message: 'Λάθος κωδικός.',
                        },
                    ],
                };
            }
            refreshToken_1.refreshToken(res, auth_1.createRefreshToken(user));
            return { user, accessToken: auth_1.createAccessToken(user) };
        });
    }
    logout({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            refreshToken_1.refreshToken(res, '');
            return true;
        });
    }
    deleteAccount(id, { payload, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id: payload === null || payload === void 0 ? void 0 : payload.userID } });
            if (!user) {
                return false;
            }
            try {
                yield typeorm_1.getConnection()
                    .getRepository(User_1.User)
                    .createQueryBuilder()
                    .delete()
                    .where('id = :id', { id: id })
                    .execute();
                refreshToken_1.refreshToken(res, '');
            }
            catch (error) {
                console.log(error);
                return false;
            }
            return true;
        });
    }
    changePassword(oldPassword, newPassword, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id: payload === null || payload === void 0 ? void 0 : payload.userID } });
            if (!user) {
                return {
                    errors: [
                        {
                            field: 'User not found',
                            message: 'User does not exist',
                        },
                    ],
                };
            }
            const valid = yield argon2_1.default.verify(user === null || user === void 0 ? void 0 : user.password, oldPassword);
            if (!valid) {
                return {
                    errors: [
                        {
                            field: 'Wrong password',
                            message: 'Wrong password',
                        },
                    ],
                };
            }
            if (newPassword.length <= 6) {
                return {
                    errors: [
                        {
                            field: 'Password Error',
                            message: 'Password length must be greater than 6 characters',
                        },
                    ],
                };
            }
            yield User_1.User.update({ id: payload === null || payload === void 0 ? void 0 : payload.userID }, {
                password: yield argon2_1.default.hash(newPassword),
            });
            return { user, accessToken: auth_1.createAccessToken(user) };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "hello", null);
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg('options')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterInput_1.RegisterInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg('email')),
    __param(1, type_graphql_1.Arg('password')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteAccount", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('oldPassword')),
    __param(1, type_graphql_1.Arg('newPassword')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePassword", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map