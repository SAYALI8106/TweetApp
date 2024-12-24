export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            console.log("req.body", req.body);
            await schema.parse(req.body);
            next();
        } catch (error) {
            res.status(400).json({ error: error.errors,
                success: false,
                message: "Validation failed"
             });
        }
    };
}