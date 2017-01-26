const express = require('express');
const Route = express.Router();

const Author = require('./models/author');

Route.get('/authors', (Request, Response) => {
  Author.find({}, {}, {}, (err, docs) => {
    if (err) {
      Response.status(400);

      Response.json({
        status: false,
        message: err.message,
        data: []
      });

      return;
    }

    Response.json({
      status: true,
      message: 'OK',
      data: docs
    });
  });
});

Route.get('/authors/:id', (Request, Response) => {
  Author.findOne({_id: Request.params.id}, {}, {}, (err, author) => {
    if (err) {
      Response.status(400);

      Response.json({
        status: false,
        message: err.message,
        data: {}
      });

      return;
    }

    Response.json({
      status: true,
      message: 'OK',
      data: author
    });
  });
});

Route.post('/authors', (Request, Response) => {
  Author.create(Request.body, (err, author) => {
    if (err) {
      Response.status(400);

      Response.json({
        status: false,
        message: err.message,
        data: {}
      });

      return;
    }

    Response.status(201);

    Response.json({
      status: true,
      message: 'Created',
      data: author
    });
  });
});

Route.put('/authors/:id', (Request, Response) => {
  Author.findOneAndUpdate({_id: Request.params.id}, Request.body, {new: true}, (err, author) => {
    if (err) {
      Response.status(400);

      Response.json({
        status: false,
        message: err.message,
        data: {}
      });

      return;
    }

    Response.status(201);

    Response.json({
      status: true,
      message: 'Updated',
      data: author
    });
  });
});

Route.delete('/authors/:id', (Request, Response) => {
  Author.findOneAndRemove({_id: Request.params.id}, {}, (err) => {
    if (err) {
      Response.status(400);

      Response.json({
        status: false,
        message: err.message,
        data: {}
      });

      return;
    }

    Response.status(201);

    Response.json({
      status: true,
      message: 'Deleted',
      data: {}
    });
  });
});

module.exports = Route;
