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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResolver = void 0;
const eventValidator_1 = require("../utils/eventValidator");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Event_1 = require("../entity/Event");
const EventInput_1 = require("./EventInput");
const isAuth_1 = require("../auth/isAuth");
let FieldErrorEvent = class FieldErrorEvent {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldErrorEvent.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldErrorEvent.prototype, "message", void 0);
FieldErrorEvent = __decorate([
    type_graphql_1.ObjectType()
], FieldErrorEvent);
let EventResponse = class EventResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldErrorEvent], { nullable: true }),
    __metadata("design:type", Array)
], EventResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Event_1.Event, { nullable: true }),
    __metadata("design:type", Event_1.Event)
], EventResponse.prototype, "event", void 0);
EventResponse = __decorate([
    type_graphql_1.ObjectType()
], EventResponse);
let EventResolver = class EventResolver {
    hello() {
        return 'event query';
    }
    createEvent(options, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = eventValidator_1.eventValidator(options);
            if (errors) {
                return { errors };
            }
            let event;
            try {
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Event_1.Event)
                    .values(Object.assign(Object.assign({}, options), { creatorId: payload === null || payload === void 0 ? void 0 : payload.userID }))
                    .returning('*')
                    .execute();
                event = result.raw[0];
            }
            catch (error) {
                console.log(error);
                return {
                    errors: [
                        {
                            field: 'Event Error',
                            message: 'Unexpected error during the event creation.',
                        },
                    ],
                };
            }
            return { event };
        });
    }
    event(id) {
        return Event_1.Event.findOne(id);
    }
    events(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const qb = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .createQueryBuilder('e')
                .orderBy('"createdAt"', 'DESC')
                .take(realLimit);
            if (cursor) {
                qb.where('"createdAt" < :cursor', {
                    cursor: new Date(parseInt(cursor)),
                });
            }
            return qb.getMany();
        });
    }
    deleteUserEvents(creatorId, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            creatorId = payload === null || payload === void 0 ? void 0 : payload.userID;
            try {
                yield typeorm_1.getConnection()
                    .getRepository(Event_1.Event)
                    .createQueryBuilder()
                    .delete()
                    .where('creatorId = :creatorId', { creatorId: creatorId })
                    .execute();
            }
            catch (error) {
                console.log(error);
                return false;
            }
            return true;
        });
    }
    musicEvents(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const qb = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .createQueryBuilder('e')
                .orderBy('"createdAt"', 'DESC')
                .take(realLimit);
            if (cursor) {
                qb.where('"createdAt" < :cursor', {
                    cursor: new Date(parseInt(cursor)),
                });
            }
            const query = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .find({ where: { topic: 'music' } });
            return qb.getMany(), query;
        });
    }
    sportEvents(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const qb = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .createQueryBuilder('e')
                .orderBy('"createdAt"', 'DESC')
                .take(realLimit);
            if (cursor) {
                qb.where('"createdAt" < :cursor', {
                    cursor: new Date(parseInt(cursor)),
                });
            }
            const query = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .find({ where: { topic: 'sports' } });
            return qb.getMany(), query;
        });
    }
    cinemaEvents(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const qb = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .createQueryBuilder('e')
                .orderBy('"createdAt"', 'DESC')
                .take(realLimit);
            if (cursor) {
                qb.where('"createdAt" < :cursor', {
                    cursor: new Date(parseInt(cursor)),
                });
            }
            const query = typeorm_1.getConnection()
                .getRepository(Event_1.Event)
                .find({ where: { topic: 'cinema' } });
            return qb.getMany(), query;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventResolver.prototype, "hello", null);
__decorate([
    type_graphql_1.Mutation(() => EventResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('options')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EventInput_1.EventInput, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "createEvent", null);
__decorate([
    type_graphql_1.Query(() => Event_1.Event, { nullable: true }),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "event", null);
__decorate([
    type_graphql_1.Query(() => [Event_1.Event], { nullable: true }),
    __param(0, type_graphql_1.Arg('limit', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cursor', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "events", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('creatorId', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "deleteUserEvents", null);
__decorate([
    type_graphql_1.Query(() => [Event_1.Event], { nullable: true }),
    __param(0, type_graphql_1.Arg('limit', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cursor', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "musicEvents", null);
__decorate([
    type_graphql_1.Query(() => [Event_1.Event], { nullable: true }),
    __param(0, type_graphql_1.Arg('limit', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cursor', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "sportEvents", null);
__decorate([
    type_graphql_1.Query(() => [Event_1.Event], { nullable: true }),
    __param(0, type_graphql_1.Arg('limit', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cursor', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "cinemaEvents", null);
EventResolver = __decorate([
    type_graphql_1.Resolver(Event_1.Event)
], EventResolver);
exports.EventResolver = EventResolver;
//# sourceMappingURL=event.js.map