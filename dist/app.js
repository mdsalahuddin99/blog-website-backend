import express, {} from 'express';
import router from './app/router/index.js';
import { globalErrorHandler } from './app/middleware/globalErrorHandler.js';
const app = express();
//Middleware
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World Md Salah Uddin!');
});
app.use('/api/v1', router);
// Global Error Handler;
app.use(globalErrorHandler);
export default app;
//# sourceMappingURL=app.js.map