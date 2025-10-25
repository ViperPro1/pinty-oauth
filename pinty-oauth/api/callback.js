module.exports = async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send("Missing code");
  res.status(200).send(`Code geldi: ${code}`);
};
