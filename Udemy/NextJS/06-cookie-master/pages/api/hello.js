

export default function handler(req, res) {
  console.log(req.cookies)//{ theme: 'dark' }
  res.status(200).json({ name: 'John Doe', ...req.cookies })
}
