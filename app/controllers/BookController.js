const Book = require('../models/book');
const Author = require('../models/author');

class BookController {

  static index(Request, Response) {
    Book.find({}, {}, {}, (err, books) => {
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
        data: books
      });
    });
  }

  static store(Request, Response) {
    let Input = Request.body;

    Author.findById(Input.authorId, (err, author) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      if (! author) {
        Response.status(404);

        Response.json({
          status: false,
          message: 'Author not found!',
          data: null
        });

        return;
      }

      let bookData = {
        title: Input.title,
        description: Input.description,
        author: author._id,
        publishedAt: Input.publishedAt ? Input.publishedAt : null,
        categories: Array.isArray(Input.categories) ? Input.categories : []
      };

      Book.create(bookData, (err, book) => {
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
          data: book
        });
      });
    });
  }

  static show(Request, Response) {
    Book.findOne({_id: Request.params.id}, {}, {}, (err, book) => {
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
        data: book
      });
    });
  }

  static update(Request, Response) {
    let Input = Request.body;

    Author.findById(Input.authorId, (err, author) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      if (! author) {
        Response.status(404);

        Response.json({
          status: false,
          message: 'Author not found!',
          data: null
        });

        return;
      }

      let bookData = {
        title: Input.title,
        description: Input.description,
        author: author._id,
        publishedAt: Input.publishedAt ? Input.publishedAt : null,
        categories: Array.isArray(Input.categories) ? Input.categories : []
      };

      Book.findOneAndUpdate({_id: Request.params.id}, bookData, {new: true}, (err, book) => {
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
          data: book
        });
      });
    });
  }

  static destroy(Request, Response) {
    Book.findOneAndRemove({_id: Request.params.id}, {}, (err) => {
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

module.exports = BookController;
