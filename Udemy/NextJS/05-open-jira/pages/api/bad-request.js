export default function handler(req, res) {
  const { message = "Bad Request" } = req.query;
  res.status(400).json({ ok: false, message });
}
