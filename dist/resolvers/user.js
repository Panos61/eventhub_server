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
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserResponse.prototype, "accessToken", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    hello() {
        return 'hiiiii';
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
                            message: 'User does not exist.',
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
                            field: 'Login',
                            message: 'Incorrect password.',
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
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "hello", null);
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
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map