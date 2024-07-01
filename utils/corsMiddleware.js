import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  origin: '*', // Allow requests from any origin
});

// Helper method to wait for middleware to execute before continuing
// and to throw an error if an error happens in middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default function corsMiddleware(handler) {
  return async (req, res) => {
    await runMiddleware(req, res, cors);
    return handler(req, res);
  };
}
