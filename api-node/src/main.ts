import app from '@app';
import bookRoutes from '@routes/bookRoutes';

bookRoutes(app);

app.listen(3000, () => {
    console.log('started server');
})