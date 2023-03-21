"use strict";
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
exports.getTwits = void 0;
const models_1 = __importDefault(require("../../models"));
const getTwits = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query || "";
        let twits_array = yield models_1.default.Twit.getTwits('', 0, 25);
        let counts = yield models_1.default.Twit.count();
        res.json({ "twits": twits_array, "counts": counts });
    }
    catch (e) {
        next(e);
    }
});
exports.getTwits = getTwits;
