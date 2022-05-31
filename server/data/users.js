import bcrypt from 'bcryptjs';

const userSample = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Jim Doe',
        email: 'jim@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Steven Frank',
        email: 'steven@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Peter Frank',
        email: 'peter@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Bazinga',
        email: 'bazinga@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    }
];

export default userSample;