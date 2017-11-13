Framework and tools:
1. I have built it, Usinng Sails.JS MVC framework of node.js  with PostgreSQL as a database.
2. Currently ,User sessions information are getting stored in-memory so after the restart previous information will be lost.



<h1>Before Starting</h1>

1.Please make sure you have Node is installed.
2.Make sure postgresql is installed and running
3.Seeding the data in default database of postgresql but in production you have to create the database and run migratiions manauly. 
<h1>Commands to run</h1>

1.cd npm install
2.sails lift

Open application in http://localhost:4000;

Login Credentials for different doctor , Pharmacist and Patients:
        name: 'Mr Patient 1',
        email: 'patient1@gmail.com',
        password: 'password'


        name: 'Dr Doctor',
        email: 'doctor@gmail.com',
        password: 'password'

        name: 'Mr Pharmacist',
        email: 'pharmacist@gmail.com',
        password: 'password'
 
        name: 'Mr Patient 2',
        email: 'patient2@gmail.com',
        password: 'password'

        name: 'Mr Patient 3',
        email: 'patient3@gmail.com',
        password: 'password'
