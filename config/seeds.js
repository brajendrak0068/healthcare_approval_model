/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
  active: true,
  role: {
    data: [
      {
        id:1,
        title: 'Patient'
      },
      {
        id:2,
        title: 'Doctor'
      },
      {
        id:3,
        title: 'Pharmacist'
      }
    ],
    overwrite: true
  },
  userrole: {
    data: [
      {
        user_id: 1,
        role_id: 1
      },
      {
        user_id: 2,
        role_id: 2
      },
      {
        user_id: 3,
        role_id: 3
      },
      {
        user_id: 4,
        role_id: 1
      },
      {
        user_id: 5,
        role_id: 1
      }
    ],
    overwrite: true
  },
  user: {
    data: [
      {
        id:1,
        name: 'Mr Patient 1',
        email: 'patient1@gmail.com',
        password: 'password'
      },
      {
        id:2,
        name: 'Dr Doctor',
        email: 'doctor@gmail.com',
        password: 'password'
      },
      {
        id:3,
        name: 'Mr Pharmacist',
        email: 'pharmacist@gmail.com',
        password: 'password'
      },
      {
        id:4,
        name: 'Mr Patient 2',
        email: 'patient2@gmail.com',
        password: 'password'
      },
      {
        id:5,
        name: 'Mr Patient 3',
        email: 'patient3@gmail.com',
        password: 'password'
      }
    ],
    overwrite: true
  },
  medicalrecord: {
    data: [
      {
        owner:5,
        title: 'asthama ',
        description: 'test1 medical record'
      },
      {
        owner:4,
        title: 'tv ',
        description: 'test2 medical record'
      },
      {
        owner:1,
        title: 'stomach pain',
        description: 'test3 medical record'
      }
    ],
    overwrite: true
  },
  prescription: {
    data: [
      {
        title: 'test1',
        password: 'test',
        prescribed_by_id: 2,
        medical_record_by_id: 1,
        requested_for_by_id: 5,
        quantity: '1 tablet',
        duration: '800 days',
        description:'x tablet, y tablet per day',
        frequency: '3 time a day'
      },
      {
        title: 'test2',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 2,
        medical_record_by_id: 2,
        requested_for_by_id: 5,
        quantity: '2 tablets',
        duration: '80 days',
        frequency: '1 time a day'

      },
      {
        title: 'test2',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 3,
        requested_for_by_id: 4,
        quantity: '4 tablets',
        duration: '50 days',
        frequency: '2 times a day'
      },
      {
        title: 'test3',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 1,
        requested_for_by_id: 4,
        quantity: '3',
        duration: '40 days',
        frequency: '3 times a day'
      }
      ,
      {
        title: 'test4',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 2,
        requested_for_by_id: 4,

        duration: '20 days',
        quantity:'4',
        frequency: '2 times a day'
      },
      {
        title: 'test4',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 3,
        requested_for_by_id: 1,
        duration: '20 days',
        quantity:'4',
        frequency: '2 times a day'
      },
      {
        title: 'test4',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 1,
        requested_for_by_id: 1,
        duration: '20 days',
        quantity:'4',
        frequency: '2 times a day'
      },
      {
        title: 'test4',
        description:'x tablet, y tablet per day',
        prescribed_by_id: 3,
        medical_record_by_id: 2,
        requested_for_by_id: 1,
        duration: '20 days',
        quantity:'4',
        frequency: '2 times a day'
      }
    ],
    overwrite: true
  }
};
