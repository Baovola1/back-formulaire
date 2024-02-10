import Form from "../models/Form.js";


export const postMessage = async (req, res, next) => {
    const { name, email, message } = req.body;
    try {
      const newMessage = new Form({
        name,
        email,
        message
      });
      await newMessage.save();
      res.status(200).json("Message send successfully");
    } catch (error) {
      if (error.code === 11000) {
        res.status(409).json({ message: "Un message avec cet email a déjà été envoyé." });
      } else {
        next(error);
      }
    }
  };
  