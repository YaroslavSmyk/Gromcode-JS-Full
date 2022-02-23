const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'Ann',
    phoneNumber: '555-55-55',
  },
];

const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  if (isAsc) {
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  }
  return contacts.sort((a, b) => b.name.localeCompare(a.name));
};
console.log(sortContacts(contacts));
