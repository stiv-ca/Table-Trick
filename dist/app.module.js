"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users/users.service");
const users_controller_1 = require("./users/users.controller");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const db_config_1 = require("./companies/persistence/db_config");
const persistence_module_1 = require("./companies/persistence/persistence.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                load: [db_config_1.default],
                isGlobal: true,
            }),
            persistence_module_1.PersistenceModule
        ],
        controllers: [users_controller_1.UserController],
        providers: [users_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map