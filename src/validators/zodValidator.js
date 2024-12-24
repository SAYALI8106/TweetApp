export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            console.log(" validate req.body", req.body);
            await schema.parse(req.body);
            next();
            console.log("validated", req.body);
        } catch (error) {
            res.status(400).json({ error: error.errors,
                success: false,
                message: "Validation failed"
             });
        }
    };
}