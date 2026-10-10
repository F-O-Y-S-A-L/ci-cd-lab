import app from './app.js';

const ports = Number.parseInt(process.env.PORT ?? '3000', 10);

app.listen(ports, '0.0.0.0', () => {
  console.log(`CI/CD lab running at http://localhost:${ports}`);
});
