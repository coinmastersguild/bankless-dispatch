"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
/*

    Pioneer REST endpoints



 */
var TAG = ' | API | ';
var pjson = require('../../package.json');
var log = require('@pioneer-platform/loggerdog')();
var redis = require('@pioneer-platform/default-redis').redis;
var os = require("os");
//rest-ts
var tsoa_1 = require("tsoa");
var pioneer_types_1 = require("@pioneer-platform/pioneer-types");
//route
var IndexController = exports.IndexController = /** @class */ (function (_super) {
    __extends(IndexController, _super);
    function IndexController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //remove api key
    /**
     *  Health Endpoint
     *  Gives me the health of the system
     *
     */
    IndexController.prototype.health = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, queueStatus, output, e_1, errorResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = TAG + " | health | ";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, redis.hgetall("info:pioneer")];
                    case 2:
                        queueStatus = _a.sent();
                        output = {
                            online: true,
                            hostname: os.hostname(),
                            uptime: os.uptime(),
                            loadavg: os.loadavg(),
                            name: pjson.name,
                            version: pjson.version,
                            system: queueStatus
                        };
                        return [2 /*return*/, (output)];
                    case 3:
                        e_1 = _a.sent();
                        errorResp = {
                            success: false,
                            tag: tag,
                            e: e_1
                        };
                        log.error(tag, "e: ", { errorResp: errorResp });
                        throw new pioneer_types_1.ApiError("error", 503, "error: " + e_1.toString());
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IndexController.prototype.plugin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, output, errorResp;
            return __generator(this, function (_a) {
                tag = TAG + " | plugin | ";
                try {
                    output = {
                        "schema_version": "v1",
                        "name_for_model": "Pioneer",
                        "name_for_human": "Pioneer Api",
                        "description_for_human": "Explore the world of cryptocurrency. live blockchain information and data.",
                        "description_for_model": "pioneer api that give real time blockchain information, lets users register wallets and then query information about their wallets with the pioneer api. ",
                        "api": {
                            "type": "openapi",
                            "url": "https://pioneers.dev/spec/swagger.json",
                            "has_user_authentication": false
                        },
                        "auth": {
                            "type": "none"
                        },
                        "logo_url": "https://pioneers.dev/coins/pioneer.png",
                        "contact_email": "highlander@keepkey.com",
                        "legal_info_url": "pioneers.dev"
                    };
                    return [2 /*return*/, (output)];
                }
                catch (e) {
                    errorResp = {
                        success: false,
                        tag: tag,
                        e: e
                    };
                    log.error(tag, "e: ", { errorResp: errorResp });
                    throw new pioneer_types_1.ApiError("error", 503, "error: " + e.toString());
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        (0, tsoa_1.Get)('/health')
    ], IndexController.prototype, "health", null);
    __decorate([
        (0, tsoa_1.Get)('/plugin')
    ], IndexController.prototype, "plugin", null);
    IndexController = __decorate([
        (0, tsoa_1.Tags)('Status Endpoints'),
        (0, tsoa_1.Route)('')
    ], IndexController);
    return IndexController;
}(tsoa_1.Controller));
