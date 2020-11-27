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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Event = class Event extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('varchar', { unique: true }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Event.prototype, "topic", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('timestamp with time zone'),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('timestamp with time zone'),
    __metadata("design:type", String)
], Event.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Event.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Event.prototype, "adultsOnly", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "extraInfo", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Object)
], Event.prototype, "creatorId", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.events),
    __metadata("design:type", User_1.User)
], Event.prototype, "creator", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Event.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Event.prototype, "updatedAt", void 0);
Event = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('events')
], Event);
exports.Event = Event;
//# sourceMappingURL=Event.js.map