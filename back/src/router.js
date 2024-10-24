import express from "express";

const router = express.Router();

router.get("/countries", (req, res) => {
    fetch('https://date.nager.at/api/v3/AvailableCountries')
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
})



export default router;