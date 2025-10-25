module.exports = async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("Missing code");
  res.send(`Code geldi: ${code}`);
};
