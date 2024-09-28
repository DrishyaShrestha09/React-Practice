const { z } = require("zod");

// creating an object schema
const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required." })
        .trim()
        .min(3, { message: "Username must be at least 3 characters long." })
        .max(255, { message: "Username must not exceed 255 characters." }),

    email: z
        .string({ required_error: "Email is required." })
        .trim()
        .email({ message: "Invalid email address format." }) // Added email format validation
        .min(3, { message: "Email must be at least 3 characters long." })
        .max(255, { message: "Email must not exceed 255 characters." }),

    phone: z
        .string({ required_error: "Phone number is required." })
        .trim()
        .min(10, { message: "Phone number must be at least 10 characters long." }) // Adjusted min length for phone number
        .max(20, { message: "Phone number must not exceed 20 characters." }) // Adjusted max length to a more reasonable limit for phone numbers
        .regex(/^\d+$/, { message: "Phone number must only contain digits." }), // Added digit validation for phone

    password: z
        .string({ required_error: "Password is required." })
        .trim()
        .min(8, { message: "Password must be at least 8 characters long." }) // Stronger min length for password security
        .max(128, { message: "Password must not exceed 128 characters." }) // Adjusted max length for password to a reasonable limit
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        }), // Added strong password validation
});

module.exports = signupSchema;