import { server } from './server';


const PORT: number = 3333;
server.listen(PORT, () => console.log(`server runner in http://localhost:3333`));
