import express from "express";
import { getCountryList, getCountryInfo } from "./controllers.js";

const router = express.Router();

router.get("/countries", getCountryList)

router.get("/country/:countryCode", getCountryInfo)


export default router;