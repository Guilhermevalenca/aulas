import app from '@app';
import bookRoutes from '@routes/bookRoutes';
import '@models/BookModel';

bookRoutes(app);

app.listen(3000, () => {    
    console.log('started server');
})