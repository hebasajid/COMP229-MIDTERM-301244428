//COMP229-MIDTERM-301244428
//HEBA SAJID 301244428
// modules required for routing
import { Router } from "express";

import { displayAddPage, displayBookList, 
    displayEditPage, processAddPage, processDelete,
     processEditPage } from "../controllers/books.js";

const router = Router();

/* GET books List page. READ */
router.get('/books/list', displayBookList);

//  GET the Book Details page in order to add a new Book
router.get('/book-add', displayAddPage);
// POST process the Book Details page and create a new Book - CREATE
router.post('/book-add', processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/book-edit/:id', displayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/book-edit/:id', processEditPage);

// GET - process the delete by user id
router.get('/book-delete/:id', processDelete);


export default router;