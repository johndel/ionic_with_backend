angular.module('ContactsApp')
  .value('FieldTypes', {
    text: ['Text', 'should be text'],
    email: ['Email', 'should be an email address'],
    number: ['Number', 'should be a number'],
    date: ['Date', 'should be a date'],
    tel: ['Text', 'should be a phone number'],
    url: ['Text', 'should be text']
  });