'use strict';

class Message{
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

function createMessage(req, res) {

  let { text, author } = req.body;

  let message = new Message(text, author);

  res.send(message);
}

module.exports = createMessage;
