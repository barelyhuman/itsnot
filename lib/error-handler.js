export default function errorHandler(res, err) {
  if (err.status) {
    res.status(err.status);
    return res.send({
      error: String(err.error),
    });
  } else {
    res.status(500);
    return res.send({
      error: 'Oops! Something went wrong',
    });
  }
}
