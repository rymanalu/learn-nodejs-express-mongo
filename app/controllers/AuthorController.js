const Author = require('../models/author');

class AuthorController {

  static index(Request, Response) {
    Author.find({}, {}, {}, (err, authors) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.json({
        status: true,
        message: 'OK',
        data: authors
      });
    });
  }

  static store(Request, Response) {
    Author.create(Request.body, (err, author) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
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
  }

  static show(Request, Response) {
    Author.findOne({_id: Request.params.id}, {}, {}, (err, author) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.json({
        status: true,
        message: 'OK',
        data: author
      });
    });
  }

  static update(Request, Response) {
    Author.findOneAndUpdate({_id: Request.params.id}, Request.body, {new: true}, (err, author) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
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
  }

  static destroy(Request, Response) {
    Author.findOneAndRemove({_id: Request.params.id}, {}, (err) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.status(201);

      Response.json({
        status: true,
        message: 'Deleted',
        data: null
      });
    });
  }

}

module.exports = AuthorController;
