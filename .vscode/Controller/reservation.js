import { json } from "express";
import errorHandler from "../Error/error.js";
import { Reservation } from "../Models/reservationSchema.js";

export const sendReservation = async (req, resp, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new errorHandler("Please fill full reservation form", 400));
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });
        resp.status(200).json({
            success: true,
            message: "Reservation sent Successfully"
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            const validationError = Object.values(err.errors).map(
                (err) => err.message
            );
            return next(new errorHandler(validationError.join(", "), 400));
        } else {
            return next(err);
        }
    }
};
