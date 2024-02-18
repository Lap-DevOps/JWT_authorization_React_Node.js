const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
  address: { type: String },
  // browserFingerprint: { type: String }
});

module.exports = model("Token", TokenSchema);
