import { v4 as uuid } from 'uuid'

export const empty = {
  personal: {
    fName: '',
    lName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    bio: '',
  },
  experience: {
    id: uuid(),
    position: '',
    company: '',
    expCity: '',
    expFrom: '',
    expTo: '',
  },
  education: {
    id: uuid(),
    uni: '',
    eduCity: '',
    degree: '',
    sub: '',
    eduFrom: '',
    eduTo: '',
  },
}

export const fill = {
  personal: {
    address: '42 Example Address',
    bio: "Camelot! But you are dressed as one… Are you suggesting that coconuts migrate? Well, how'd you become king, then? Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.",
    email: 'elon@example.com',
    fName: 'Elon',
    lName: 'Musk',
    phone: '0123456789',
    title: 'Chief Operating Officer',
  },

  experience: [
    {
      company: 'The Boring Company',
      expCity: 'Hawthorne',
      expFrom: '2016',
      expTo: 'Present',
      id: uuid(),
      position: 'Founder',
    },

    {
      company: 'Neuralink',
      expCity: 'San Francisco',
      expFrom: '2016',
      expTo: 'Present',
      id: uuid(),
      position: 'Co-Founder & CEO',
    },

    {
      company: 'Solar City',
      expCity: 'San Mateo',
      expFrom: '2006',
      expTo: 'Present',
      id: uuid(),
      position: 'Co-Founder',
    },

    {
      company: 'Tesla Inc.',
      expCity: 'Austin',
      expFrom: '2002',
      expTo: 'Present',
      id: uuid(),
      position: 'CEO & Product Architect',
    },
    {
      company: 'SpaceX',
      expCity: 'Hawthorne',
      expFrom: '2002',
      expTo: 'Present',
      id: uuid(),
      position: 'Founder, CEO & Chief Engineer',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science',
      eduCity: 'Pennsylvania',
      eduFrom: '1992',
      eduTo: '1995',
      id: uuid(),
      sub: 'Economics',
      uni: 'Wharton School of the University of Pennsylvania',
    },

    {
      degree: 'Bachelor of Science',
      eduCity: 'Pennsylvania',
      eduFrom: '1992',
      eduTo: '1995',
      id: uuid(),
      sub: 'Physics',
      uni: "Penn's College of Arts and Sciences",
    },
  ],
}
