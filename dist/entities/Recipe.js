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
exports.Recipe = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Rate_1 = require("./Rate");
let Recipe = class Recipe {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    core_1.PrimaryKey(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ description: "The title of the recipe" }),
    core_1.Property(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => [Rate_1.Rate]),
    core_1.Property(),
    __metadata("design:type", Array)
], Recipe.prototype, "ratings", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    core_1.Property(),
    __metadata("design:type", Number)
], Recipe.prototype, "averageRating", void 0);
Recipe = __decorate([
    type_graphql_1.ObjectType(),
    core_1.Entity()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=Recipe.js.map