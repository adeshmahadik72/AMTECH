export const loginUser = (req, res) => {
  const { name, contact } = req.body;

  if (!name || !contact) {
    return res.status(400).json({ message: "Missing fields" });
  }

  res.json({
    message: "Login successful",
    user: {
      name,
      contact,
    },
  });
};
