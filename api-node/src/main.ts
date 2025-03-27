import app from '@app';
import database from '@database';
import bookRoutes from '@routes/bookRoutes';

bookRoutes(app);

async function main() {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();

app.listen(3000, () => {    
    console.log('started server');
})